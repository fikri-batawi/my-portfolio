import React from 'react'
import  './iconmedia.scss'

const IconMedia = ({icon,url}) => {
    return (
        <div className="icon-media">
            <a href={url}><img src={icon} alt="..." /></a>
        </div>
    )
}

export default IconMedia
