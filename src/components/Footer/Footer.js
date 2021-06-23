import React from 'react'

import classes from './Footer.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = props => {
    return (
        <div className={classes['Footer-container']}>
            <div className={classes['Footer-subContainer']}>
                <h2>Redes Sociais</h2>
                <div className={classes['Footer-icons--container']}>
                    <FontAwesomeIcon 
                        icon={['fab', 'instagram-square']} 
                        size="3x"
                    />
                    <FontAwesomeIcon 
                        icon={['fab', 'facebook-square']} 
                        size="3x"
                    />
                    <FontAwesomeIcon 
                        icon={['fab', 'twitter-square']} 
                        size="3x"
                    />
                    <FontAwesomeIcon 
                        icon={['fab', 'google-plus-square']} 
                        size="3x"
                    />
                    <FontAwesomeIcon 
                        icon={['fab', 'linkedin']} 
                        size="3x"
                    />
                </div>
                <div className={classes['Footer-brand']}>
                    <p>Desenvolvido por <span>Wegis Silveira</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer