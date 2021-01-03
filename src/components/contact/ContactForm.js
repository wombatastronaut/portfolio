import React from 'react'

function ContactForm () {
    const submit = (e) => {
        e.preventDefault()
    }

    return (                    
        <form name="enquiry" className="w-full max-w-screen-lg grid grid-cols-2 gap-5" onSubmit={submit}>
            <div>
                <input type="text" name="name" className="p-3 w-full rounded-sm " placeholder="Your Name" />
            </div>

            <div>
                <input type="email" name="email" className="p-3 w-full rounded-sm " placeholder="Your Email" />
            </div>

            <div className="col-span-2">
                <input type="text" name="subject" className="p-3 w-full rounded-sm " placeholder="Your Subject" />
            </div>

            <div className="col-span-2">
                <textarea name="message" className="p-3 w-full rounded-sm" cols="30" rows="8" placeholder="Your Message"></textarea>
            </div>

            <div className="col-span-2 flex justify-end">
                <button className="py-3 px-8 text-white font-semibold" type="submit">Send</button>
            </div>
        </form>
    )
}

export default ContactForm