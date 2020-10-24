import React from 'react';
import './hero.scss';

const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <h1 className="hero-title">
                    <span>Hi, I’m Fikri.</span> I’m a developer
                    living and learning in Jakarta,
                    Indonesia.
                </h1>
                <p className="hero-subtitle">I'm passionate about creating engaging apps, experiences and I want to
                use technology to help make people's lives more fulfilling. You can
                find me on <a href="#linkedin">Linkedin</a> and <a href="https://github.com/fikri-batawi">Github</a>, download my <a href="#resume">resume</a> or shoot
                me an <a href="#email">email</a>.</p>
            </div>
        </>
    )
}

export default Hero