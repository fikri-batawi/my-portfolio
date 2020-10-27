import React from 'react';
import { regionPantau,shapeRegion1, shapeRegion2 } from '../../../assets';
import './sectionregion.scss';

const SectionRegion = () => {
    return (
        <div className="region-pantau-container">
            <div className="region-pantau-content" data-aos="fade-down" data-aos-duration="1500">
                <p>02.</p>
                <h2>List Regions.</h2>
                <p>Select region to view regional data.</p>
            </div>
            <div className="region-pantau-image" data-aos="fade-up" data-aos-duration="1800">
                <img src={regionPantau} alt="..." />
            </div>
            <div className="region-pantau-shape">
                <img src={shapeRegion1} alt="..."/>
                <img src={shapeRegion2} alt="..."/>
            </div>
        </div>
    )
}

export default SectionRegion
