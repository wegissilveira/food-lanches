import React from 'react' 

import classes from './Navigation.module.css'

import Logo from './Logo/Logo'
import MenuNavigation from './MenuNavigation/MenuNavigation'



const Navigation = props => {

    let [yPosition, setYPosition] = React.useState(0)

    const navigationElRef = React.createRef()

    React.useEffect(() => {
        const actualYPosition = window.pageYOffset

        setYPosition(actualYPosition)
        console.log(actualYPosition)
    }, [])

    const teste = () => {
        const actualYPosition = navigationElRef

        // setYPosition(actualYPosition)

        console.log(yPosition)
        console.log(window.pageYOffset)
    }

    console.log(window.pageYOffset)


    return (
        <div onScroll={() => teste()} ref={navigationElRef} className={classes['Navigation-container']}>
            <Logo />
            <MenuNavigation />
        </div>
    )
}

export default Navigation