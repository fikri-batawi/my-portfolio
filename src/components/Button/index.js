import React from 'react';
import './button.scss';

const Button = ({ title,url }) => {
    return <a href={url} className="button-primary">{title}</a>
}

export default Button
