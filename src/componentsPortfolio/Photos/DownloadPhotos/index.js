import React from 'react'
import ButtonDownloadPhotos from '../ButtonDownloadPhotos'
import './downloadphotos.scss'

const DownloadPhotos = () => {
    return (
        <div className="download-photos-container">
            <div className="download-photos-content">
                <h2>Download For Free</h2>
                <p>Download the photos app and find interesting pictures from photographers.</p>
                <ButtonDownloadPhotos />
            </div>
        </div>
    )
}

export default DownloadPhotos
