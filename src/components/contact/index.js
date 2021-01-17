import React from 'react'

import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <section id="contact" className="contact py-5 px-10 mb-12">
            <div className="container mx-auto flex flex-wrap flex-col justify-center items-center">
                <h2 className="text-center mb-10 text-white font-medium">Let's Talk</h2>
                
                <div className="flex-grow min-w-full py-16 px-12">
                    <ContactDetails />
                    <div className="flex justify-center">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact