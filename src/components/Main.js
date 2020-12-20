import React, { Component } from 'react'

import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

class Main extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <div>
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Portfolio />
                    <Contact />
                </main>
                <Footer />
            </div>
        )
    }
}

export default Main