import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header'
import Home from './home'
import Blogs from './Blogs'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

class Main extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Header />
                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/blogs' component={Blogs} />
                    </Switch>
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        )
    }
}

export default Main