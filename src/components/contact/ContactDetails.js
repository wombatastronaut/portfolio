import React from 'react'


const ContactDetails = () => {
    const contactDetailItems = [
        {
            icon: 'phone',
            text: '+639063663049'
        },
        {
            icon: 'map',
            text: 'Cagayan De Oro City, Philippines'
        },
        {
            icon: 'envelope',
            text: 'ronnielsembrano@gmail.com'
        }
    ]

    return (
        <ul className="contact-details w-full grid grid-cols-1 md:grid-cols-3 mb-20">
            {contactDetailItems.map((contactDetailItem, index) => (
                <li className="mb-5 md:mb-0 text-center" key={index}>
                    <div className="icon-container inline-block p-4 mb-5 border border-solid border-white rounded-full">
                        <i className={'lni lni-' + contactDetailItem.icon +  ' text-white'}></i>
                    </div>
                    <div className="w-full text-white font-semibold">{contactDetailItem.text}</div>
                </li>
            ))}
        </ul>
    )
}

export default ContactDetails