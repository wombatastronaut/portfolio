import React, { Component } from 'react'

import ContactForm from './ContactForm'

class Contact extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section id="contact" className="contact py-5 px-10 mb-12">
                <div className="container mx-auto flex flex-wrap flex-col justify-center items-center">
                    <h2 className="text-center mb-10 text-white font-medium">Let's Talk</h2>
                    
                    <div className="flex-grow min-w-full py-16 px-12">
                        <ul className="w-full grid grid-cols-1 md:grid-cols-3 mb-20">
                            <li className="mb-5 md:mb-0 text-center">
                                <div className="icon-container inline-block p-4 mb-5 border border-solid border-white rounded-full">
                                    <i className="lni lni-phone text-white "></i>
                                </div>
                                <div className="w-full text-white font-semibold">+639063663049</div>
                            </li>
                            <li className="mb-5 md:mb-0 text-center">
                                <div className="icon-container inline-block p-4 mb-5 border border-solid border-white rounded-full">
                                    <i className="lni lni-map text-white "></i>
                                </div>
                                <div className="w-full text-white font-semibold">Cagayan De Oro City, Philippines</div>
                            </li>
                            <li className="mb-5 md:mb-0 text-center">
                                <div className="icon-container inline-block p-4 mb-5 border border-solid border-white rounded-full">
                                    <i className="lni lni-envelope text-white "></i>
                                </div>
                                <div className="w-full text-white font-semibold">ronnielsembrano@gmail.com</div>
                            </li>
                        </ul>
                        
                        <div className="flex justify-center">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact