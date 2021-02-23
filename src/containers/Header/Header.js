import React, { Component } from 'react'

import classes from './Header.module.css'

import Navigation from '../../components/Navigation/Navigation'


class Header extends Component {
    render() {
        return (
            <div className={classes['Header-container']}>
                <Navigation />
                <h1 className={classes['Header-title']}>NOSSOS LANCHES SÃO <span>APAIXONANTES</span></h1>
            </div>
        )
    }
}

export default Header