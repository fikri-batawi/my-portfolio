import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1>Muhammad Fikri</h1>
                </div>
                <div className="navbar-menu">
                    <Link className="navbar-item active" to="/">Home</Link>
                    <Link className="navbar-item" to="/about">About</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
