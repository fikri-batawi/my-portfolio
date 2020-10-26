import React from 'react'
import {heroPantau, shapeHero1,shapeHero2,shapeHero3 } from '../../../assets'
import './hero.scss'

const Hero = () => {
    return (
        <div className="hero-pantau">
            <div className="hero-content-pantau">
                <h1>Pantau Covid-19</h1>
                <p>Application to monitor the number of covid patients in the territory of Indonesia</p>
            </div>
            <div className="hero-image-pantau">
                <img src={heroPantau} alt="..." />
            </div>
            <div className="hero-shape-pantau-hero">
                <img src={shapeHero1} alt="..." />
                <img src={shapeHero2} alt="..." />
                <img src={shapeHero3} alt="..." />
            </div>
        </div>
    )
}

export default Hero
