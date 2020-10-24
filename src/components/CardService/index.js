import React from 'react'
import './cardservice.scss'

const CardService = ({image,title,subtitle}) => {
    return (
        <div className="service-card">
            <div className="service-image">
                <img src={image} width="64" height="64" alt="..." />
            </div>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
    )
}

export default CardService
