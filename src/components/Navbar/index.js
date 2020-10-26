import React from 'react';
import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { pageRoutes } from '../../config/Routes/routes';

const Navbar = () => {
    const loc = useLocation().pathname
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <h1>Muhammad Fikri</h1>
                </div>
                <div className="navbar-menu">
                    {
                        pageRoutes.map(route => {
                            if (loc === route.url) return <Link key={route.url} className="navbar-item active" to={route.url}> {route.title} </Link>
                            else return <Link key={route.url} className="navbar-item" to={route.url}>
                                {route.title} </Link>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
