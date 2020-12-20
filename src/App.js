import React, { Component } from 'react'

import './assets/css/linearicons.css'
import './App.css'

import Main from './components/Main'

class App extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <Main />
        )
    }
}

export default App