import React from 'react'

import classes from './MenuNavigation.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const MenuNavigation = props => {
    return (
        <div className={classes['MenuNavigation-container']}>
            <div className={classes['Navigation-title']}>
                <p>INÍCIO</p>
                <p>CARDÁPIO</p>
                <p>SOBRE NÓS</p>
                <p>CONTATO</p>
            </div>
            <div className={classes['Navigation-icons']}>
                <FontAwesomeIcon 
                    icon={['fab', 'facebook-square']} 
                    size="2x"
                />
                <FontAwesomeIcon 
                    icon={['fab', 'twitter-square']} 
                    size="2x"
                />
            </div>
        </div>
    )
}

export default MenuNavigation