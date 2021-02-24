import React, { Component, Fragment } from 'react'

import classes from './Layout.module.css'

import Header from '../Header/Header'
import CustomerReviews from '../CustomerReviews/CustomerReviews'



class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <CustomerReviews />
            </Fragment>
        )
    }
}

export default Layout