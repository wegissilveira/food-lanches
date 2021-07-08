import React, { Component } from 'react'

import classes from './Menu.module.css'

import MenuComponent from '../../components/MenuComponent/MenuComponent'


class Menu extends Component {

    render() {
        return (
            <div id="menu" className={classes['Menu-container']}>
                <h1>CARDÁPIO</h1>
                <p>Nosso cardápio. Abra, escolha a melhor opção para você e se <br/> prepare para um grande experiência</p>
                <MenuComponent />
            </div>
        )
    }
}

export default Menu