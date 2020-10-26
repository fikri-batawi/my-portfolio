import React from 'react'
import { Link } from 'react-router-dom'
import './cardportfolio.scss'

const CardPortfolio = ({ image, title, subtitle, url, link }) => {
    return (
        <>
            <div className="card-container">
                <div className="card-image">
                    <img src={image} alt="..." />
                </div>
                {
                    link === undefined ?
                        <Link to={url} target="blank">
                            <h2 className="card-title">{title}</h2>
                        </Link> :
                        <a href={link} target="blank">
                            <h2 className="card-title">{title}</h2>
                        </a>
                }
                <p className="card-subtitle">{subtitle}</p>
            </div>
        </>
    )
}

export default CardPortfolio
