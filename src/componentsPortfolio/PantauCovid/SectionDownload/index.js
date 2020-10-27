import React from 'react';
import { dataPantau, detailPantau, homescreenPantau, regionPantau, shapedetail1 } from '../../../assets';
import './sectiondownload.scss';

const SectionDownload = () => {
    return (
        <div className="download-pantau-container">
            <div className="download-pantau-content" data-aos="fade-down" data-aos-duration="1800">
                <h2>Ready-to-use</h2>
                <p>Download and get the latest info on covid data in Indonesia.</p>
                <a href="https://drive.google.com/file/d/13mo7ExS7PmzBQhYAm-hJjbltES0OxQuJ/view?usp=sharing" className="button-download">Download App</a>
            </div>
            <div className="download-pantau-image">
                <img data-aos="zoom-in" data-aos-duration="1300" src={homescreenPantau} alt='...' />
                <img data-aos="zoom-in" data-aos-duration="1500" src={regionPantau} alt='...' />
                <img data-aos="zoom-in" data-aos-duration="1700" src={dataPantau} alt='...' />
                <img data-aos="zoom-in" data-aos-duration="1900" src={detailPantau} alt='...' />
            </div>
            <div className="download-pantau-shape">
                <img src={shapedetail1} alt="..." />
            </div>
        </div>  
    )
}

export default SectionDownload