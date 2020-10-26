import React from 'react'
import './sectiondata.scss'
import { dataPantau, shapedata1, shapedata2 } from '../../../assets'

const SectionData = () => {
    return (
        <div className="data-pantau-container">
            <div className="data-pantau-image">
                <img src={dataPantau} alt="..." />
            </div>
            <div className="data-pantau-content">
                <p>03.</p>
                <h2>Data Screen.</h2>
                <p>The number of region patients.</p>
            </div>
            <div className="data-pantau-shape">
                <img src={shapedata1} alt="..."/>
                <img src={shapedata2} alt="..."/>
            </div>
        </div>
    )
}

export default SectionData
