import React, { Component } from 'react'

import classes from './Menu.module.css'


class Menu extends Component {
    render() {
        return (
            <div className={classes['Menu-container']}>
                <h2>CARDÁPIO</h2>
                <p>AQUI VOU COLOCAR DOIS CARROCÉIS</p>
                <p>Um para seleciona o tipo de alimento</p>
                <p>E um embaixo com o cardápio que pertence a cada alimento e mudará a cadda passagem do carretel menu</p>
            </div>
        )
    }
}

export default Menu