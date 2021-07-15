import React, { Component, Fragment } from 'react'

import Header from '../Header/Header'
import CustomerReviews from '../CustomerReviews/CustomerReviews'
import Menu from '../Menu/Menu'
import SobreNos from '../../components/SobreNos/SobreNos'
import Burger from '../../components/Burger/Burger'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

import TestComponent from './TestComponent'



class Layout extends Component {

    render() {

        return (
            <Fragment>
                <Header />
                <CustomerReviews />
                <Menu />
                <SobreNos />
                <Burger />
                <Contact/>
                <Footer />
                <TestComponent />
            </Fragment>
        )
    }
}

export default Layout