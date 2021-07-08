import React from 'react'

import classes from './MenuNavigation.module.css'
import './scrollNavigation.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-scroll'


const MenuNavigation = props => {
    return (
        <div className={classes['MenuNavigation-container']}>
            <div className={classes['Navigation-title']}>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                    <p>INÍCIO</p>
                </Link>
                <Link to="menu" spy={true} smooth={true}>
                    <p>CARDÁPIO</p>
                </Link>
                <Link to="about" spy={true} smooth={true}>
                    <p>SOBRE NÓS</p>
                </Link>
                <Link to="contact" spy={true} smooth={true}>
                    <p>CONTATO</p>
                </Link>
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