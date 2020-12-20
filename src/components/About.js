import React, { Component } from 'react'

class About extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <section id="about" className="about">
                <div className="container mx-auto grid grid-cols-3 gap-10">
                    <img src="https://via.placeholder.com/400" alt="Me" />
                    <article className="col-span-2">
                        <h2 className="text-left mb-5 font-medium">About Me</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel consequat turpis. Nunc in libero at dolor ultrices mattis et quis nisi. Vestibulum nunc augue, tempor id convallis ut, interdum quis sapien. Sed convallis ligula laoreet bibendum sagittis. Etiam aliquet odio felis, laoreet suscipit erat vehicula nec. Vivamus tempor faucibus eleifend. Phasellus maximus posuere tellus, non sagittis erat egestas eget. Etiam bibendum facilisis tincidunt. Integer ullamcorper ultricies mi, id facilisis tortor aliquam in. Donec vulputate lectus vel turpis tempus pellentesque. Donec iaculis vitae velit vel dictum. Ut semper est et leo pretium, non varius felis pharetra. Curabitur orci lorem, aliquam at dui nec, ultricies interdum sapien.</p>
                    </article>
                </div>
		    </section>
        )
    }
}

export default About