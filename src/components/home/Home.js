import React, { Component } from 'react'

import Hero from '../Hero'
import About from '../About'
import Skills from '../Skills'
import Experience from '../Experience'
import Portfolio from '../Portfolio'
import Contact from '../contact'

import './Home.scss'

class Home extends Component {
    constructor (props) {
		super(props)
    }

    render () {
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
}

export default Home