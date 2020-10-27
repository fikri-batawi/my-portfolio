import React from 'react'
import './herophotos.scss'
import {heroPhotos} from '../../../assets'
import ButtonDownloadPhotos from '../ButtonDownloadPhotos'

const HeroPhotos = () => {
    return (
        <div className="hero-photos-container">
            <div className="hero-photos-content">
                <h1>Make your life powerfull</h1>
                <p>With the photos application, you can search for any image, anytime. You can even download images without limits.</p>
                <ButtonDownloadPhotos/>
            </div>
            <div className="hero-photos-image">
                <img src={heroPhotos} alt="..." />
            </div>
        </div>
    )
}
export default HeroPhotos
