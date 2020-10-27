import React from 'react'
import { iconFeaturePhotos1, iconFeaturePhotos2, iconFeaturePhotos3 } from '../../../assets'
import CardFeaturePhotos from '../CardFeaturePhotos'
import { Gap } from '../../../atoms'
import './faeturesphotos.scss'

const FeaturesPhotos = () => {
    return (
        <div className="features-photos-container">
            <h2 data-aos="fade-down" data-aos-duration="1300">Our Features</h2>
            <div className="features-photos-content">
                <CardFeaturePhotos
                    animation="fade-up"
                    duration={1100}
                    image={iconFeaturePhotos1}
                    title="Search Images"
                    subtitle="look for pictures from the world's top photographers" />
                <Gap width={120} />
                <CardFeaturePhotos
                    animation="fade-up"
                    duration={1300}
                    image={iconFeaturePhotos2}
                    title="Choose Orientation"
                    subtitle="select the form of landscape and other image orientation" />
                <Gap width={120} />
                <CardFeaturePhotos
                    animation="fade-up"
                    duration={1500}
                    image={iconFeaturePhotos3}
                    title="Download Image"
                    subtitle="download images with the best resolution" />
            </div>
        </div>
    )
}

export default FeaturesPhotos
