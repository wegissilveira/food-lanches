import React from 'react' 

import classes from './Navigation.module.css'

import Logo from './Logo/Logo'
import MenuNavigation from './MenuNavigation/MenuNavigation'



const Navigation = props => {

    let [navBg, setNavBg] = React.useState('transparent')

    let navbarStyle = {
        backgroundColor: navBg
    }

    const changeNavBar = () => {
        if (window.scrollY > 50) {
            setNavBg('#3e2113bb')
        } else {
            setNavBg('transparent')
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', changeNavBar);
      
        return () =>
          window.removeEventListener('scroll', changeNavBar);
    }, []);

    return (
        <div style={navbarStyle} className={classes['Navigation-container']}>
            <Logo />
            <MenuNavigation />
        </div>
    )
}

export default Navigation