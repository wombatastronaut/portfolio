import React, { Component } from 'react'

class Portfolio extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <section id="portfolio" className="portfolio py-5 px-10">
                <div className="container mx-auto">
                    <h2 className="text-center mb-5 font-medium">Portfolio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel consequat turpis. Nunc in libero at dolor ultrices mattis et quis nisi. Vestibulum nunc augue, tempor id convallis ut, interdum quis sapien. Sed convallis ligula laoreet bibendum sagittis. Etiam aliquet odio felis, laoreet suscipit erat vehicula nec. Vivamus tempor faucibus eleifend. Phasellus maximus posuere tellus, non sagittis erat egestas eget. Etiam bibendum facilisis tincidunt. Integer ullamcorper ultricies mi, id facilisis tortor aliquam in. Donec vulputate lectus vel turpis tempus pellentesque. Donec iaculis vitae velit vel dictum. Ut semper est et leo pretium, non varius felis pharetra. Curabitur orci lorem, aliquam at dui nec, ultricies interdum sapien.</p>
                </div>
		    </section>
        )
    }
}

export default Portfolio