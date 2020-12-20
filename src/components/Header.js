import React, { Component } from 'react'

class Header extends Component {
    constructor (props) {
        super(props)
        
        this.scrollTo = this.scrollTo.bind(this)
    }
    /**
     * Scroll to section
     * 
     * @param {Object} e the event object of the element 
     */
    scrollTo (e) {
        e.preventDefault()
        const section = document.getElementById(e.target.dataset.target)

        if (!section) return

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    render () {
        return (
            <header className="absolute w-full z-10 py-5 px-10">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-4xl font-extrabold text-white">Logo</a>
        
                    <nav>
                        <ul className="flex gap-8">
                            <li><a href="#" className="text-white font-medium" data-target="about" onClick={this.scrollTo}>About</a></li>
                            <li><a href="#" className="text-white font-medium" data-target="skills" onClick={this.scrollTo}>Skills</a></li>
                            <li><a href="#" className="text-white font-medium" data-target="experience" onClick={this.scrollTo}>Experience</a></li>
                            <li><a href="#" className="text-white font-medium" data-target="portfolio" onClick={this.scrollTo}>Portfolio</a></li>
                            <li><a href="#" className="text-white font-medium" data-target="contact" onClick={this.scrollTo}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header