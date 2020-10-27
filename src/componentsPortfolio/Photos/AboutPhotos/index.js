import React from 'react'
import { aboutPhotos } from '../../../assets'
import './aboutphotos.scss'

const AboutPhotos = () => {
    return (
        <div className="about-photos-container">
            <div className="about-photos-content">
                <h2 data-aos="zoom-in" data-aos-duration="1500">About App</h2>
                <p data-aos="zoom-in" data-aos-duration="1600">The photos application is made with the React Native platform as a free image search engine from world photographers with various orientation sizes and can download images with good resolution.</p>
            </div>
            <div className="about-photos-image" data-aos="fade-left" data-aos-duration="1800">
                <img src={aboutPhotos} alt="..." />
            </div>
        </div>
    )
}

export default AboutPhotos
