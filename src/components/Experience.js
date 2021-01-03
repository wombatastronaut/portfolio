import React, { Component } from 'react'

class Experience extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <section id="experience-and-education" className="experience-and-education py-5 px-10">
                <div className="container mx-auto grid grid-cols-2 gap-20">
                    <div id="education" className="education">
                        <h2 className="text-center mb-10 text-white font-medium">Education</h2>

                        <div className="experience-item relative py-10 px-12">
                            <span className="experience-item-arrow"></span>
                            <h4 className="text-xl text-white font-medium mb-2">Bachelor of Science in Information Technology</h4>
                            <span class="experience-item-details block mb-5 text-white">University of Science and Technology of Southern Philippines / 2011 - 2015</span>
                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                        </div>
                    </div>
                    
                    <div id="experience" className="experience">
                        <h2 className="text-center mb-10 text-white font-medium">Experience</h2>

                        <div className="experience-item relative py-10 px-12">
                            <span className="experience-item-arrow"></span>
                            <h4 className="text-xl text-white font-medium mb-2">Software Engineer</h4>
                            <span class="experience-item-details block mb-5 text-white">Zeald / June 2019 - Present</span>
                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                        </div>

                        <div className="experience-item relative py-10 px-12">
                            <span className="experience-item-arrow"></span>
                            <h4 className="text-xl text-white font-medium mb-2">Full Stack Developer</h4>
                            <span class="experience-item-details block mb-5 text-white">Fligno / May 2018 - June 2019</span>
                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                        </div>

                        <div className="experience-item relative py-10 px-12">
                            <span className="experience-item-arrow"></span>
                            <h4 className="text-xl text-white font-medium mb-2">Full Stack Developer</h4>
                            <span class="experience-item-details block mb-5 text-white">Syntactics, Inc. / May 2015 - May 2018</span>
                            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience