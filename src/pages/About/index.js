import React from 'react'
import { Data, Hero, Navbar, Services, Teams,Contact, Footer } from '../../components'

const About = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Data/>
            <Services/>
            <Teams/>
            <Contact />
            <Footer bg='bg-blue'/>
        </>
    )
}

export default About
