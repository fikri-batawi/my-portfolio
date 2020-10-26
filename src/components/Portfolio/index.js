import React from 'react'
import './portfolio.scss'
import {CardPortfolio} from '../../components'
import { contentCVM, contentPantau, contentPhotos } from '../../assets';
import Gap from '../../atoms/Gap';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <CardPortfolio
                image={contentPantau}
                title="Application Android Data Covid Indonesia"
                subtitle="React Native, Public API."
                url="/portfolio/pantau-covid" />
            <Gap height={42} />
            <CardPortfolio
                image={contentCVM}
                title="Website Laboratory Computer Vision and Multimedia "
                subtitle="HTML, CSS, Javascript."
                url="https://lab-cvm.netlify.app" />
            <Gap height={42} />
            <CardPortfolio
                image={contentPhotos}
                title="Application Android Photos"
                subtitle="React Native, Public API, Fetch Blob."
                url="#" />
        </div>
    )
}

export default Portfolio
