import React from 'react';
import './sectiondetail.scss';
import { detailPantau, shapedetail2 } from '../../../assets';
const SectionDetail = () => {
    return (
        <div className="detail-pantau-container">
            <div className="detail-pantau-content">
                <p>04.</p>
                <h2>Detail Article.</h2>
                <p>One of the detailed articles about health.</p>
            </div>
            <div className="detail-pantau-image">
                <img src={detailPantau} alt="..." />
            </div>
            <div className="detail-pantau-shape">
                <img src={shapedetail2} alt="..." />
            </div>
        </div>
    )
}

export default SectionDetail
