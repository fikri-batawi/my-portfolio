import React from 'react';
import { homescreenPantau, shapeHomescreen1, shapeHomescreen3 } from '../../../assets';
import './sectionhomescreen.scss';

const SectionHomescreen = () => {
    return (
        <div className="homescreen-pantau-container">
            <div className="homescreen-pantau-image">
                <img src={homescreenPantau} alt="..." />
            </div>
            <div className="homescreen-pantau-content">
                <p>01.</p>
                <h2>Home screen.</h2>
                <p>Select menu to view covid data or view articles.</p>
            </div>
            <div className="homescreen-pantau-shape">
                <img src={shapeHomescreen1} alt="..."/>
                <img src={shapeHomescreen3} alt="..."/>
            </div>
        </div>
    )
}

export default SectionHomescreen
