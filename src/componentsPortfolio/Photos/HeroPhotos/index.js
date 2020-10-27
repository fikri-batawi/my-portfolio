import React from 'react'
import './herophotos.scss'
import {heroPhotos} from '../../../assets'
import ButtonDownloadPhotos from '../ButtonDownloadPhotos'

const HeroPhotos = () => {
    return (
        <div className="hero-photos-container">
            <div className="hero-photos-content">
                <h1 data-aos="fade-right" data-aos-duration="1800">Make your life powerfull</h1>
                <p data-aos="fade-right" data-aos-duration="2100">With the photos application, you can search for any image, anytime. You can even download images without limits.</p>
                <ButtonDownloadPhotos/>
            </div>
            <div className="hero-photos-image" data-aos="zoom-in-up" data-aos-duration="1500">
                <img src={heroPhotos} alt="..." />
            </div>
        </div>
    )
}
export default HeroPhotos
