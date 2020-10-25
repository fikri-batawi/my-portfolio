import React from 'react';
import './footer.scss';

const Footer = ({bg}) => {
    return (
        <div className={`footer-container ${bg}`}>
            <p>&copy; Copyright AllRight {new Date().getFullYear()} - Muhammad fikri</p>
        </div>
    )
}

export default Footer
