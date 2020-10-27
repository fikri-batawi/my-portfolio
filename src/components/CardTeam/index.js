import React from 'react'
import './cardteam.scss'

const CardTeam = ({image,name,position,animate,duration}) => {
    return (
        <div className="card-team" data-aos={animate} data-aos-duration={duration}>
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <h4>{name}</h4>
            <p>{position}</p>
        </div>
    )
}

export default CardTeam
