import React from 'react'
import {AboutPhotos, DownloadPhotos, FeaturesPhotos, HeroPhotos} from '../../componentsPortfolio'
import {Footer} from '../../components'

const Photos = () => {
    return (
        <>
            <HeroPhotos />
            <AboutPhotos />
            <FeaturesPhotos />
            <DownloadPhotos />
            <Footer />
        </>
    )
}

export default Photos
