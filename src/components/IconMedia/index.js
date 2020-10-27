import React from 'react'
import  './iconmedia.scss'

const IconMedia = ({icon,url}) => {
    return (
        <div className="icon-media" data-aos="fade-up" data-aos-duration="1800">
            <a href={url}><img src={icon} alt="..." /></a>
        </div>
    )
}

export default IconMedia
