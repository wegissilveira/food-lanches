import React from 'react' 

import classes from './Navigation.module.css'

import Logo from '../Logo/Logo'



const Navigation = props => {
    return (
        <div className={classes['Navigation-container']}>
            <Logo />
        </div>
    )
}

export default Navigation