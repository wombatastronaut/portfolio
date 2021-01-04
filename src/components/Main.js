import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './home'
import Blogs from './Blogs'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Main = () => {
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

export default Main