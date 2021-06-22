import React, { Component, Fragment } from 'react'

import classes from './Layout.module.css'

import Header from '../Header/Header'
import CustomerReviews from '../CustomerReviews/CustomerReviews'
import Menu from '../Menu/Menu'
import SobreNos from '../../components/SobreNos/SobreNos'
import Burger from '../../components/Burger/Burger'



class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <CustomerReviews />
                <Menu />
                <SobreNos />
                <Burger />
            </Fragment>
        )
    }
}

export default Layout