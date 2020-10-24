import React from 'react'
import './cardportfolio.scss'

const CardPortfolio = ({ image, title, subtitle, url }) => {
    return (
        <>
            <div className="card-container">
                <div className="card-image">
                    <img src={image} alt="..." />
                </div>
                <a href={url}>
                    <h2 className="card-title">{title}</h2>
                </a>
                <p className="card-subtitle">{subtitle}</p>
            </div>
        </>
    )
}

export default CardPortfolio
