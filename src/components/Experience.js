import React from 'react'

const Experience = () => {
    return (
        <section id="experience-and-education" className="experience-and-education py-5 px-10">
            <div className="container mx-auto grid grid-cols-2 gap-20">
                <div id="education" className="education">
                    <h2 className="text-center mb-10 text-white font-medium">Education</h2>

                    <div className="experience-item relative py-10 px-12">
                        <span className="experience-item-arrow"></span>
                        <h4 className="text-xl text-white font-medium mb-2">Bachelor of Science in Information Technology</h4>
                        <span class="experience-item-details block mb-5 text-white">University of Science and Technology of Southern Philippines / 2011 - 2015</span>
                        <p class="text-white">Studied about software, hardware and networking.</p>
                    </div>
                </div>
                
                <div id="experience" className="experience">
                    <h2 className="text-center mb-10 text-white font-medium">Experience</h2>

                    <div className="experience-item">
                        <span className="experience-item-arrow"></span>
                        <h4>Software Engineer</h4>
                        <span class="experience-item-details">Zeald / June 2019 - Present</span>
                        <ul className="list-disc">
                            <li className="text-white">Develop new features and fix issues to Zeald's e-commerce platform(Perl based)</li>
                            <li className="text-white">Build custom features for different clients using Zeald's e-commerce platform(Perl based)</li>
                            <li>Assist teammates' about development issues and contribute in improving the team's development process</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <span className="experience-item-arrow"></span>
                        <h4>Full Stack Developer</h4>
                        <span class="experience-item-details">Fligno / May 2018 - June 2019</span>
                        <ul className="list-disc">
                            <li className="text-white">Develop and maintain SaaS applications using Laravel, VueJS and ReactJS</li>
                            <li className="text-white">Setup web server for Laravel projects using AWS, Apache/Nginx</li>
                            <li>Train team about technologies/practices that will help improve the development process</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <span className="experience-item-arrow"></span>
                        <h4>Full Stack Developer</h4>
                        <span class="experience-item-details">Syntactics, Inc. / May 2015 - May 2018</span>
                        <ul className="list-disc">
                            <li className="text-white">Develop and maintain SaaS applications using Laravel, CodeIgniter and VueJS</li>
                            <li className="text-white">Develop and maintain sites using Wordpress</li>
                            <li className="text-white">Implement payment gateways like Stripe, Braintree, Fastspring, and Paypal using PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience