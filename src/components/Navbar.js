import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
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

        if (!section) {
            return
        }

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    render () {
        return (        
            <nav className="hidden md:block">
                <ul className="flex gap-8">
                    <li>
                        <a href="#" className="relative text-white font-medium" data-target="about" onClick={this.scrollTo}>About</a>
                    </li>
                    <li>
                        <a href="#" className="relative text-white font-medium" data-target="skills" onClick={this.scrollTo}>Skills</a>
                    </li>
                    <li>
                        <a href="#" className="relative text-white font-medium" data-target="experience-and-education" onClick={this.scrollTo}>Experience</a>
                    </li>
                    <li>
                        <a href="#" className="relative text-white font-medium" data-target="portfolio" onClick={this.scrollTo}>Portfolio</a>
                    </li>
                    <li>
                        <NavLink className="relative text-white font-medium" to="/blogs">Blogs</NavLink>
                    </li>
                    <li>
                        <a href="#" className="relative text-white font-medium" data-target="contact" onClick={this.scrollTo}>Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar