import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const scrollTo = (e) => {
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

    return (        
        <nav className="hidden md:block">
            <ul className="flex gap-8">
                <li>
                    <a href="#" className="relative text-white font-medium" data-target="about" onClick={scrollTo}>About</a>
                </li>
                <li>
                    <a href="#" className="relative text-white font-medium" data-target="skills" onClick={scrollTo}>Skills</a>
                </li>
                <li>
                    <a href="#" className="relative text-white font-medium" data-target="experience-and-education" onClick={scrollTo}>Experience</a>
                </li>
                <li>
                    <a href="#" className="relative text-white font-medium" data-target="portfolio" onClick={scrollTo}>Portfolio</a>
                </li>
                <li>
                    <NavLink className="relative text-white font-medium" to="/blogs">Blogs</NavLink>
                </li>
                <li>
                    <a href="#" className="relative text-white font-medium" data-target="contact" onClick={scrollTo}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar