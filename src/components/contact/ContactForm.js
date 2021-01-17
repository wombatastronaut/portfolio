import React, { useState } from 'react'

import emailjs from 'emailjs-com'

function ContactForm () {
    const [isLoading, setIsLoading] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        setIsLoading(true)

        emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_hiA8Qbo3l9ynw3mXq7qZ1')
            .then((result) => {
                console.log(result.text)
                setIsLoading(false)
            }, (error) => {
                console.log(error.text)
                setIsLoading(false)
            })
    }

    return (                    
        <form name="enquiry" className="contact-form w-full max-w-screen-lg grid grid-cols-2 gap-5" onSubmit={submit}>
            <div>
                <input type="text" name="user_name" className="p-3 w-full rounded-sm" placeholder="Your Name" />
            </div>

            <div>
                <input type="email" name="user_email" className="p-3 w-full rounded-sm" placeholder="Your Email" />
            </div>

            <div className="col-span-2">
                <textarea name="message" className="p-3 w-full rounded-sm" cols="30" rows="8" placeholder="Your Message"></textarea>
            </div>

            <div className="col-span-2 flex justify-end">
                <button className={'py-3 px-8 text-white font-semibold' + (isLoading ? ' loading' : '')} type="submit">Send</button>
            </div>
        </form>
    )
}

export default ContactForm