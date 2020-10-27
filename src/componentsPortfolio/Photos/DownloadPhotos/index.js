import React from 'react'
import ButtonDownloadPhotos from '../ButtonDownloadPhotos'
import './downloadphotos.scss'

const DownloadPhotos = () => {
    return (
        <div className="download-photos-container">
            <div className="download-photos-content">
                <h2 data-aos="fade-right" data-aos-duration="1300">Download For Free</h2>
                <p data-aos="fade-right" data-aos-duration="1500">Download the photos app and find interesting pictures from photographers.</p>
                <ButtonDownloadPhotos />
            </div>
        </div>
    )
}

export default DownloadPhotos
