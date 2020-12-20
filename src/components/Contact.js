import React, { Component } from 'react'

class Contact extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <section className="contact py-5 px-10">
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
                </div>
            </section>
        )
    }
}

export default Contact