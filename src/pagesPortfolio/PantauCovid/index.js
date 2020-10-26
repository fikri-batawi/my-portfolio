import React from 'react'
import { HeroPantau, SectionData, SectionDetail, SectionDownload, SectionHomescreenPantau, SectionRegionPantau } from '../../componentsPortfolio'
import {Footer} from '../../components'

const PantauCovid = () => {
    return (
        <>
            <HeroPantau />
            <SectionHomescreenPantau />
            <SectionRegionPantau />
            <SectionData />
            <SectionDetail />
            <SectionDownload />
            <Footer/>
        </>
    )
}

export default PantauCovid
