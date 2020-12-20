import React, { Component } from 'react'

class Header extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <header className="absolute w-full z-10 py-5 px-10">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="text-4xl font-extrabold text-white">Logo</a>
        
                    <nav className="">
                        <ul className="flex gap-8">
                            <li><a href="" className="text-white font-medium">About</a></li>
                            <li><a href="" className="text-white font-medium">Skills</a></li>
                            <li><a href="" className="text-white font-medium">Experience</a></li>
                            <li><a href="" className="text-white font-medium">Portfolio</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header