import React from 'react'

const About = () => {
    return (
        <section id="about" className="about py-5 px-10 mb-12">
            <div className="container mx-auto">
                <h2 className="text-center mb-10 text-white font-medium">About Me</h2>                
                <div className="grid grid-cols-3 gap-10 py-16 px-12">
                    <img src="https://via.placeholder.com/400" alt="Me" />
                    <article className="col-span-2">
                        <p>
                            I'm a passionate software engineer based in the Phillipines with almost 6 years of solid experience.
                            My expertise is backend development using <span className="text-white">PHP(Laravel, CodeIgniter, Wordpress)</span>, frontend development using <span className="text-white">HTML</span>, <span className="text-white">CSS</span>, <span className="text-white">Javascript(VueJS, ReactJS, JQuery, VanillaJS)</span>,
                            database management using <span className="text-white">MySQL</span>. I also know basic server configuration for PHP and JS projects.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About