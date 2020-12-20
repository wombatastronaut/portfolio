import React, { Component } from 'react'

import ContactForm from './ContactForm'

class Contact extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section id="contact" className="contact py-5 px-10">
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <h2 className="text-center mb-5 font-medium">Let's Talk</h2>
                    
                    <ul className="w-full grid grid-cols-3 mb-20">
                        <li>
                            <div className="icon-container mb-5">
                                <i className="lni lni-phone"></i>
                            </div>
                            <div className="w-full font-semibold">+639063663049</div>
                        </li>
                        <li>
                            <div className="icon-container mb-5">
                                <i className="lni lni-map"></i>
                            </div>
                            <div className="w-full font-semibold">Cagayan De Oro City, Philippines</div>
                        </li>
                        <li>
                            <div className="icon-container mb-5">
                                <i className="lni lni-envelope"></i>
                            </div>
                            <div className="w-full font-semibold">ronnielsembrano@gmail.com</div>
                        </li>
                    </ul>
                    
                    <ContactForm />
                </div>
            </section>
        )
    }
}

export default Contact