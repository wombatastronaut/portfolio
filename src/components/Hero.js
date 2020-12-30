import React, { Component } from 'react'

class Hero extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <section className="hero h-screen relative">
                <div id="particles-js" className="bg-overlay absolute w-full h-full"></div>

                <div className="container mx-auto w-full h-full flex items-center">
                    <div className="z-10">
                        <span className="greetings text-white font-medium">Hello there, I'm</span>
                        <h1 className="font-black text-white">Ronniel Sembrano</h1>
                        <span className="titles text-white font-semibold">Software Engineer | Hacker</span>
                    </div>
                </div>

                <ul className="social-links absolute bottom-0 mb-6 w-full flex justify-center gap-5">
                    <li>
                        <a href="https://github.com/wombatastronaut" className="inline-block p-3" target="_blank">
                            <i className="lni lni-github text-white"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/ronniel-sembrano" className="inline-block p-3" target="_blank">
                            <i className="lni lni-linkedin text-white"></i>
                        </a>
                    </li>
                </ul>
		    </section>
        )
    }
}

export default Hero