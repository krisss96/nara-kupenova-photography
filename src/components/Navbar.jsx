import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">NK</div>
            <ul className="nav-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/work">GALLERY</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;