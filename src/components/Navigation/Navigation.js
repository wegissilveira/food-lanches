import React from 'react' 

import classes from './Navigation.module.css'

import DrawerToggle from '../UI/DrawerToggle/DrawerToggle'
import Logo from '../Logo/Logo'



const Navigation = props => {
    return (
        <div className={classes['Navigation-container']}>
            <Logo />
            <DrawerToggle />
        </div>
    )
}

export default Navigation