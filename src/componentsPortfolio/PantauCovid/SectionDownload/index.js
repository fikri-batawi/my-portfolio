import React from 'react';
import { dataPantau, detailPantau, homescreenPantau, regionPantau, shapedetail1 } from '../../../assets';
import './sectiondownload.scss';

const SectionDownload = () => {
    return (
        <div className="download-pantau-container">
            <div className="download-pantau-content">
                <h2>Ready-to-use</h2>
                <p>Download and get the latest info on covid data in Indonesia.</p>
                <a href="#download" className="button-download">Download App</a>
            </div>
            <div className="download-pantau-image">
                <img src={homescreenPantau} alt='...' />
                <img src={regionPantau} alt='...' />
                <img src={dataPantau} alt='...' />
                <img src={detailPantau} alt='...' />
            </div>
            <div className="download-pantau-shape">
                <img src={shapedetail1} alt="..." />
            </div>
        </div>  
    )
}

export default SectionDownload