import React from 'react'

import classes from './Burger.module.css'


const Burger = props => {
    return (
        <div className={classes['Burger-container']}>
            <div>
                <h2>Hambúrgueres Artesanais</h2>
                <img src={require('../../assets/images/burger.jpg').default} alt="burger"/>
            </div>
            <div>
                <h2>Pizzas Suculentas</h2>
                <img src={require('../../assets/images/pizza.jpg').default} alt="pizza"/>
            </div>
            <div>
                <h2 className={classes['BurgerTitle-natural']}>Deliciosos Lanches <br/> Naturais</h2>
                <img src={require('../../assets/images/natural.jpg').default} alt="pizza"/>
            </div>
            
        </div>
    )
}

export default Burger