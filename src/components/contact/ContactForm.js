import React, { Component } from 'react'

class ContactForm extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (                    
            <form name="enquiry" className="w-full grid grid-cols-2 grid-rows-3 gap-5">
                <div>
                    <input type="text" name="name" className="p-3 w-full rounded-sm " placeholder="Your Name" />
                </div>
                
                <div className="row-span-3">
                    <textarea name="message" className="p-3 w-full rounded-sm" cols="30" rows="8" placeholder="Your Message"></textarea>
                </div>

                <div>
                    <input type="email" name="email" className="p-3 w-full rounded-sm " placeholder="Your Email" />
                </div>

                <div>
                    <input type="phone" name="phone" className="p-3 w-full rounded-sm " placeholder="Your Phone" />
                </div>

                <div className="col-start-2 flex justify-end">
                    <button className="rounded-sm py-3 px-8 text-white font-semibold uppercase" type="submit">Send</button>
                </div>
            </form>
        )
    }
}

export default ContactForm