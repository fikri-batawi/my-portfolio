import React from 'react';
import './hero.scss';

const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <h1 className="hero-title" data-aos="zoom-in" data-aos-duration="1300">
                    <span>Hi, I’m Fikri.</span> I’m a developer
                    living and learning in Jakarta,
                    Indonesia.
                </h1>
                <p className="hero-subtitle" data-aos="zoom-in" data-aos-duration="1500">I'm passionate about creating engaging apps, experiences and I want to use technology to help make people's lives more fulfilling. You can find me on  <a href="https://www.linkedin.com/in/muhammad-fikri-049a41a8/"> Linkedin </a> and  <a href="https://github.com/fikri-batawi">Github</a> , download my  <a href="https://drive.google.com/file/d/1iNPK6BoNOzUXzMRHITml3tf0Z9jDC9is/view?usp=sharing">resume</a> or shoot me an  <a href="mailto:senikoding@gmail.com">email</a>.</p>
            </div>
        </>
    )
}

export default Hero