import React, { Component } from 'react'

class ScrollToTop extends Component {
    constructor (props) {
        super(props)
        
        this.scrollToTop = this.scrollToTop.bind(this)
    }

    componentDidMount () {
        window.addEventListener('scroll', this.scroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }

    scroll () {
        const currentYOffset = window.pageYOffset

        if (currentYOffset > 0) {
            console.log('show')
        } else {
            console.log('hide')
        }
    }

    scrollToTop () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    render () {
        return (
            <div className="scroll-to-top">
                <button className="px-4 py-3" onClick={this.scrollToTop}>
                    <i className="lni lni-chevron-up text-white"></i>
                </button>
            </div>
        )
    }
}

export default ScrollToTop