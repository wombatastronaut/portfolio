import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10 py-5 px-10">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink className="text-4xl font-extrabold text-white" to="/">Logo</NavLink>
                <Navbar />
            </div>
        </header>
    )
}

export default Header