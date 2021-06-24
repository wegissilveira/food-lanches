import React from 'react'

import classes from './MenuComponent.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuOptionsComponent from './MenuOptionsComponent/MenuOptionsComponent'


const MenuComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)
    let [headerWidth, ] = React.useState(windowWidth * 3)
    let [headerTab, setHeaderTab] =  React.useState(['sanduíches', 'pizzas', 'bebidas'])
    let [headerTabRef, setHeaderTabRef] = React.useState(0)
    let [translateValue, setTranslateValue] = React.useState(0)


    const headerStyle = {
        width: headerWidth,
        transform: `translateX(${translateValue}px)`
    }

    const passMenuHandler = dir => {

        let newTranslateValue = translateValue
        let newHeaderTabHeader = headerTabRef

        if (dir === 'next' && translateValue > (headerWidth * -1) + windowWidth) {
            newTranslateValue = newTranslateValue - windowWidth
            newHeaderTabHeader++
        } 

        if (dir === 'previous' && translateValue < 0) {
            newTranslateValue = newTranslateValue + windowWidth
            newHeaderTabHeader--
        }

        setTranslateValue(newTranslateValue)
        setHeaderTabRef(newHeaderTabHeader)
    }

    
    return (
        
        <div>
            <div 
                className={classes['Menu-header']}
                style={headerStyle}    
            >
                <div>
                    <FontAwesomeIcon
                        icon={['fas', 'hamburger']} 
                        size="2x"
                    />
                    <h2>SANDUÍCHES</h2>
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={['fas', 'pizza-slice']} 
                        size="2x"
                    />
                    <h2>PIZZAS</h2>
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={['fas', 'cocktail']} 
                        size="2x"
                    />
                    <h2>BEBIDAS</h2>
                </div>
            </div>
            
            <MenuOptionsComponent 
                windowWidth={windowWidth}
                headerTab={headerTab[headerTabRef]}
            />
            {/* <button onClick={() => passMenuHandler('previous')}>atrás</button>
            <button onClick={() => passMenuHandler('next')}>frente</button> */}
        </div>
    )
}

export default MenuComponent