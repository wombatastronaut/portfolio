import React from 'react'

import ProgressBar from './ProgressBar'

const Skills = () => {
    return (
        <section id="skills" className="skills py-5 px-10 mb-12">
            <div className="container mx-auto">
                <h2 className="text-center mb-10 text-white font-medium">Skills</h2>

                <div className="py-16 px-12">
                    <ProgressBar label="HTML" value="80" />
                    <ProgressBar label="CSS" value="90" />
                    <ProgressBar label="VueJS" value="80" />
                    <ProgressBar label="ReactJS" value="60" />
                    <ProgressBar label="PHP(Laravel, Wordpress, CodeIgniter)" value="80" />
                    <ProgressBar label="MySQL" value="70" />
                </div>
            </div>
        </section>
    )
}

export default Skills