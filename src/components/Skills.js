import React from 'react'

import ProgressBar from './ProgressBar'

function Skills () {
    return (
        <section id="skills" className="skills py-5 px-10 mb-12">
            <div className="container mx-auto">
                <h2 className="text-center mb-10 text-white font-medium">Skills</h2>

                <div className="py-16 px-12">
                    <ProgressBar label="HTML5" value="8" max="10" />
                    <ProgressBar label="CSS" value="9" max="10" />
                    <ProgressBar label="VueJS" value="8" max="10" />
                    <ProgressBar label="ReactJS" value="6" max="10" />
                    <ProgressBar label="PHP(Laravel, Wordpress, CodeIgniter)" value="8" max="10" />
                    <ProgressBar label="MySQL" value="7" max="10" />
                </div>
            </div>
        </section>
    )
}

export default Skills