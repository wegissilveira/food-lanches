import React, { Component } from 'react'

import classes from './Menu.module.css'

import MenuComponent from '../../components/MenuComponent/MenuComponent'


class Menu extends Component {

    render() {
        return (
            
            <div className={classes['Menu-container']}>
                <h1>CARDÁPIO</h1>
                <MenuComponent />
            </div>
        )
    }
}

export default Menu