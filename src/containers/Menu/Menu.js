import React, { Component } from 'react'

import classes from './Menu.module.css'

import MenuComponent from '../../components/MenuComponent/MenuComponent'


class Menu extends Component {

    render() {
        return (
            
            <div className={classes['Menu-container']}>
                <h1>CARDÁPIO</h1>
                {/* <p>AQUI VOU COLOCAR DOIS CARROCÉIS</p>
                <p>Um para seleciona o tipo de alimento</p>
                <p>E um embaixo com o cardápio que pertence a cada alimento e mudará a cadda passagem do carretel menu</p> */}
                <MenuComponent />
            </div>
        )
    }
}

export default Menu