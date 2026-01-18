import React, { useEffect, useState } from 'react';
import { supabase } from './SuperbaseClient.jsx';

const { VITE_ADMIN_EMAIL: ADMIN_EMAIL } = import.meta.env;
const BUCKET = 'images';

export default function AdminPage() {
    const [user, setUser] = useState(null);
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [creds, setCreds] = useState({ email: '', password: '' });

    const isAdmin = user?.email === ADMIN_EMAIL;


    const fetchFiles = async () => {
        const { data, error } = await supabase.storage.from(BUCKET).list(null, { limit: 100 });
        if (error) return console.error('Error loading files:', error);

        const fileList = (data || []).map(item => ({
            ...item,
            url: supabase.storage.from(BUCKET).getPublicUrl(item.name).data.publicUrl
        }));
        setFiles(fileList);
    };

    const handleAuth = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword(creds);
        if (error) alert(error.message);
    };

    const handleUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const path = `${Date.now()}_${file.name.replace(/\s/g, '_')}`;

        const { error } = await supabase.storage.from(BUCKET).upload(path, file);
        setUploading(false);

        if (error) alert(`Upload failed: ${error.message}`);
        else await fetchFiles();
    };

    const handleDelete = async (name) => {
        if (!confirm(`Delete ${name}?`)) return;
        const { error } = await supabase.storage.from(BUCKET).remove([name]);
        if (error) alert(error.message);
        else await fetchFiles();
    };

    useEffect(() => {
        // Auth Listener
        supabase.auth.getSession().then(({ data }) => setUser(data.session?.user));
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
            setUser(session?.user);
        });
        return () => subscription?.unsubscribe();
    }, []);

    useEffect(() => {
        if (user) fetchFiles();
    }, [user]);


    if (!user) return (
        <div className="admin-container">
            <form onSubmit={handleAuth} className="admin-box">
                <h2>Admin Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={creds.email}
                    onChange={e => setCreds({...creds, email: e.target.value})}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={creds.password}
                    onChange={e => setCreds({...creds, password: e.target.value})}
                />
                <button type="submit" className="btn-primary">Sign In</button>
            </form>
        </div>
    );

    return (
        <div className="admin-container">
            <header className="admin-header">
                <h3>Dashboard</h3>
                <div className="user-info">
                    <span>{user.email} {isAdmin ? '(Admin)' : '(Guest)'}</span>
                    <button onClick={() => supabase.auth.signOut()} className="btn-text">Sign Out</button>
                </div>
            </header>

            {isAdmin ? (
                <div className="admin-content">
                    <div className="upload-section">
                        <label className={`btn-primary ${uploading ? 'disabled' : ''}`}>
                            {uploading ? 'Uploading...' : 'Upload New Image'}
                            <input type="file" hidden accept="image/*" onChange={handleUpload} disabled={uploading} />
                        </label>
                        <button onClick={fetchFiles} className="btn-secondary">Refresh</button>
                    </div>

                    <ul className="file-list">
                        {files.length === 0 && <li className="empty">No files found.</li>}
                        {files.map(f => (
                            <li key={f.name} className="file-item">
                                <a href={f.url} target="_blank" rel="noreferrer" className="file-link">{f.name}</a>
                                <button onClick={() => handleDelete(f.name)} className="btn-danger">Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="admin-content">
                    <p className="error-text">You do not have permission to view this panel.</p>
                </div>
            )}
        </div>
    );
}