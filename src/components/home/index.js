import React from 'react'

import Hero from '../Hero'
import About from '../About'
import Skills from '../Skills'
import Experience from '../experience'
import Portfolio from '../Portfolio'
import Contact from '../contact'

import './Home.scss'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home