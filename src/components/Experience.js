import React, { Component } from 'react'

class Experience extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <section id="experience" className="experience py-5 px-10">
                <div className="container mx-auto">
                    <h2 className="text-center mb-5 font-medium">Experience</h2>
                    
                    <div className="timeline relative">
                        <div className="timeline-block">
                            <div className="timeline-dot">
                            </div>
                            <div className="timeline-content">
                                <div className="card">
                                    <h6 className="font-medium">Software Engineer</h6>
                                    <span className="block">Zeald</span>
                                    <span className="block">June 2019 - Present</span>
                                    <p>I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-block">
                            <div className="timeline-dot">
                            </div>
                            <div className="timeline-content">
                                <div className="card">
                                    <h6 className="font-medium">Software Engineer</h6>
                                    <span className="block">Zeald</span>
                                    <span className="block">June 2019 - Present</span>
                                    <p>I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience