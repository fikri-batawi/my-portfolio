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
                find me on  <a href="https://www.linkedin.com/in/muhammad-fikri-049a41a8/"> Linkedin </a> and  <a href="https://github.com/fikri-batawi">Github</a> , download my  <a href="https://github.com/fikri-batawi/my-portfolio/tree/master/src/assets/resume/Resume-MuhammadFikri.pdf">resume</a> or shoot me an  <a href="mailto:senikoding@gmail.com">email</a>.</p>
            </div>
        </>
    )
}

export default Hero