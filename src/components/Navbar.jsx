import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">NK.</div>
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/work">My Work</Link></li>
                <li><Link to="/about">About Me</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;