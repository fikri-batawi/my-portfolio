import React from 'react';
import './sectiondetail.scss';
import { detailPantau, shapedetail2 } from '../../../assets';
const SectionDetail = () => {
    return (
        <div className="detail-pantau-container">
            <div className="detail-pantau-content" data-aos="fade-right" data-aos-duration="2100">
                <p>04.</p>
                <h2>Detail Article.</h2>
                <p>One of the detailed articles about health.</p>
            </div>
            <div className="detail-pantau-image" data-aos="zoom-in" data-aos-duration="1800">
                <img src={detailPantau} alt="..." />
            </div>
            <div className="detail-pantau-shape">
                <img src={shapedetail2} alt="..." />
            </div>
        </div>
    )
}

export default SectionDetail
