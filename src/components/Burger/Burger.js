import React from 'react'

import classes from './Burger.module.css'


const Burger = props => {
    return (
        <div className={classes['Burger-container']}>
            <div className={classes['Burger-subContainer--mobile']}>
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
            <div className={classes['Burger-subContainer']}>
                <div>
                    <div>
                        <div className={classes['Burger-header']}>
                            <h1>Hambúrgueres Artesanais</h1>
                            <p>Possuímos uma quase incontável gama de hambúrgueres artesanais desenvolvidos ao longo de vários anos de experiência. Todos os hambúrgueres são criados com carnes de primeira, selecionadas individualmente por nossos profissionais especializados.</p>
                        </div>
                        <img src={require('../../assets/images/burger.jpg').default} alt="burger" />

                        <div className={classes['Burger-header']}>
                            <h1>Pizzas Suculentas</h1>
                            <p>Possuímos uma quase incontável gama de hambúrgueres artesanais desenvolvidos ao longo de vários anos de experiência. Todos os hambúrgueres são criados com carnes de primeira, selecionadas individualmente por nossos profissionais especializados.</p>
                        </div>
                        <img src={require('../../assets/images/pizza.jpg').default} alt="burger" />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={classes['Burger-header--lanches']}>
                            <h1>Incríveis Lanches Naturais</h1>
                            <p>Possuímos uma quase incontável gama de hambúrgueres artesanais desenvolvidos ao longo de vários anos de experiência. Todos os hambúrgueres são criados com carnes de primeira, selecionadas individualmente por nossos profissionais especializados.</p>
                        </div>
                        <img src={require('../../assets/images/natural.jpg').default} alt="natural" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger