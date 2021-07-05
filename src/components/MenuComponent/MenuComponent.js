import React from 'react'

import classes from './MenuComponent.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuOptionsComponent from './MenuOptionsComponent/MenuOptionsComponent'


const MenuComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)
    let [headerWidth, setHeaderWidth] = React.useState(0)
    let [headerTab, setHeaderTab] =  React.useState(['sanduíches', 'pizzas', 'bebidas'])
    let [headerTabRef, setHeaderTabRef] = React.useState(0)
    let [translateValue, setTranslateValue] = React.useState(0)

    const subContainer = React.createRef()


    const headerStyle = {
        width: headerWidth,
        transform: `translateX(${translateValue}px)`
    }

    const passMenuMobileHandler = dir => {

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

    const passMenuHandler = i => {
        setHeaderTabRef(i)

        const subContainerElementArr = [].slice.call(subContainer.current.children)

        subContainerElementArr.forEach((el, idx) => {
            if (idx === i) {
                el.style.color = '#991C1E'
                // el.classList.remove(classes['Header-item'])
                el.classList.add(classes['Header-item-alt'])
            } else {
                el.style.color = '#F5C662'
                el.classList.remove(classes['Header-item-alt'])
            }
        })

        // subContainerElement[i].style.color = 'blue'

        // console.log(subContainerElementArr)

        // let after = window.getComputedStyle(subContainerElementArr[i],':after')
        // console.log(after['content'])
    }

    React.useEffect(() => {
        let newHeaderWidth

        if (windowWidth >= 1200) {
            newHeaderWidth = '60%'
        } else {
            newHeaderWidth = windowWidth * 3
        }

        setHeaderWidth(newHeaderWidth)
    }, [windowWidth])


   


    
    return (
        
        <div className={classes['Menu-subContainer']}>
            <div 
                className={classes['Menu-header']}
                style={headerStyle} 
                ref={subContainer}   
            >
                <div className={[classes['Header-item'], classes['Header-item-alt']].join(' ')} onClick={() => passMenuHandler(0)}>
                    <FontAwesomeIcon
                        icon={['fas', 'hamburger']} 
                        size="2x"
                    />
                    <h2>SANDUÍCHES</h2>
                </div>
                <div className={classes['Header-item']} onClick={() => passMenuHandler(1)}>
                    <FontAwesomeIcon
                        icon={['fas', 'pizza-slice']} 
                        size="2x"
                    />
                    <h2>PIZZAS</h2>
                </div>
                <div className={classes['Header-item']} onClick={() => passMenuHandler(2)}>
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
            {/* <button onClick={() => passMenuMobileHandler('previous')}>atrás</button>
            <button onClick={() => passMenuMobileHandler('next')}>frente</button> */}
        </div>
    )
}

export default MenuComponent