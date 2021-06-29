import React from 'react' 

import classes from './Navigation.module.css'

import Logo from './Logo/Logo'
import MenuNavigation from './MenuNavigation/MenuNavigation'



const Navigation = props => {
    return (
        <div className={classes['Navigation-container']}>
            <Logo />
            <MenuNavigation />
        </div>
    )
}

export default Navigation