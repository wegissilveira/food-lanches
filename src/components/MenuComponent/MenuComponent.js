import React from 'react'

import classes from './MenuComponent.module.css'

import MenuOptionsComponent from './MenuOptionsComponent/MenuOptionsComponent'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderComponent from '../shared/SliderComponent/SliderComponent';


const MenuComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)
    let [headerTab, ] =  React.useState(['sanduíches', 'pizzas', 'bebidas'])
    let [headerTabIndex, setHeaderTabRef] = React.useState(0)

    const subContainerRef = React.createRef()
    const optionsRef = React.useRef()

    const setIndexCallBack = i => {
        setHeaderTabRef(i)
    }

    const passMenuHandler = i => {
        setHeaderTabRef(i)
        const subContainerElementArr = [].slice.call(subContainerRef.current.children)

        subContainerElementArr.forEach((el, idx) => {
            if (idx === i) {
                el.style.color = '#991C1E'
                el.classList.add(classes['Header-item-alt'])
            } else {
                el.style.color = '#F5C662'
                el.classList.remove(classes['Header-item-alt'])
            }
        })
        
        if (headerTabIndex !== i) {
            optionsRef.current.children[1].style = 'transform: translateX(0)'
        }
        
    }

    const headerItems = (
        <React.Fragment>
            <div 
                className={[classes['Header-item'], classes['Header-item-alt']].join(' ')} 
                onClick={windowWidth >= 1200 ? () => passMenuHandler(0) : null}
            >
                <FontAwesomeIcon
                    icon={['fas', 'hamburger']} 
                    size="2x"
                />
                <h2>SANDUÍCHES</h2>
            </div>
            <div 
                className={classes['Header-item']} 
                onClick={windowWidth >= 1200 ? () => passMenuHandler(1) : null}
            >
                <FontAwesomeIcon
                    icon={['fas', 'pizza-slice']} 
                    size="2x"
                />
                <h2>PIZZAS</h2>
            </div>
            <div 
                className={classes['Header-item']} 
                onClick={windowWidth >= 1200 ? () => passMenuHandler(2) : null}
            >
                <FontAwesomeIcon
                    icon={['fas', 'cocktail']} 
                    size="2x"
                />
                <h2>BEBIDAS</h2>
            </div>
        </React.Fragment>
    )


    
    return (
        
        <div className={classes['Menu-subContainer']} ref={optionsRef}>

            { windowWidth < 1200 ? 
                    <SliderComponent
                        classStyle={classes['Menu-header']}
                        sliderLength={3}
                        setIndex={i => setIndexCallBack(i)}
                        arrows={false}
                        markers={false}
                        parent={true}
                    > {headerItems}
                    </SliderComponent> 
                :
                    <div 
                        className={classes['Menu-header']}
                        ref={subContainerRef}   
                    > {headerItems}
                    </div>
            }
            
            <MenuOptionsComponent 
                windowWidth={windowWidth}
                headerTab={headerTab[headerTabIndex]}
            />
        </div>
    )
}

export default MenuComponent