import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './assets/css/linearicons.css'
import './assets/scss/app.scss'

import Main from './components/Main'

class App extends Component {
    constructor (props) {
		super(props)
    }

    render () {
        return (
            <Router>
                <Main />
            </Router>
        )
    }
}

export default App