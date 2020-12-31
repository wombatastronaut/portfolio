import React, { Component } from 'react'

class Footer extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        const currentYear = new Date().getFullYear()

        return (
            <footer>
                <div className="container mx-auto flex justify-center items-center">
                    <p className="text-white">© { currentYear } <span>Ronniel</span>. All Rights Reserved.</p>
                </div>
            </footer>
        )
    }
}

export default Footer