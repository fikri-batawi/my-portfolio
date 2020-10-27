import React from 'react'
import './cardservice.scss'

const CardService = ({image,title,subtitle,duration}) => {
    return (
        <div className="service-card" data-aos="zoom-in" data-aos-duration={duration}>
            <div className="service-image">
                <img src={image} width="64" height="64" alt="..." />
            </div>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
    )
}

export default CardService
