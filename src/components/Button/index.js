import React from 'react';
import './button.scss';

const Button = ({ title,url }) => {
    return <a href={url} className="button-primary" data-aos="fade-up" data-aos-duration="1800">{title}</a>
}

export default Button
