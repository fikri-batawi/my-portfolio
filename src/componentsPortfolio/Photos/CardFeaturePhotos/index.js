import React from 'react'
import './cardfeaturephotos.scss'

const CardFeaturePhotos = ({image,title,subtitle}) => {
    return (
        <div className="card-feature-photos-container">
            <div className="card-feature-photos-image">
                <img src={image} alt="..." />
            </div>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
    )
}

export default CardFeaturePhotos
