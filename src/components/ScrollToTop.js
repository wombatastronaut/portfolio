import React, { useState, useEffect } from 'react'

function ScrollToTop () {
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', scroll, true)
    })

    const scroll = () => {
        const currentYOffset = window.pageYOffset

        if (currentYOffset > 0) {
            setDisplay(1)
        } else {
            setDisplay(0)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!display) {
        return (null)
    }

    return (
        <div className="scroll-to-top">
            <button className="px-4 py-3" onClick={scrollToTop}>
                <i className="lni lni-chevron-up text-white"></i>
            </button>
        </div>
    )
}

export default ScrollToTop