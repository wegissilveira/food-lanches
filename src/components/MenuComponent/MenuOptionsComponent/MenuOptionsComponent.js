import React, { Fragment } from 'react'

import classes from './MenuOptionsComponent.module.css'

import PassSlidesArrows from '../../UI/PassSlidesArrows/PassSlidesArrows'

import optionsData from '../../../Data/optionsData'


const MenuOptionsComponent = props => {

    let [optionsWidth, setOptionsWidth] = React.useState(0)
    let [translateValue, setTranslateValue] = React.useState(0)
    let [arrows, setArrows] = React.useState([])


    const optionsStyle = {
        width: optionsWidth,
        transform: `translateX(${translateValue}px)`
    }

    const passMenuOptionsHandler = dir => {
        if (dir === 'next' && translateValue > (optionsWidth * -1) + props.windowWidth) {
            setTranslateValue(translateValue - props.windowWidth)
            disableArrows()
        } else if (dir === 'previous' && translateValue < 0) {
            setTranslateValue(translateValue + props.windowWidth)
            disableArrows()
        }  
    }

    const disableArrows = () => {
        let newArrows = [...arrows]
        if (translateValue > (optionsWidth * -1) + props.windowWidth) {
            newArrows[1] = false
            console.log('teste1')
        } else {
            newArrows[1] = true
            console.log('teste2')
        }

        if (translateValue < 0) {
            newArrows[0] = false
            console.log('teste3')
        } else {
            newArrows[0] = true
            console.log('teste4')
        }
        setArrows(newArrows)
        
    }

    let optionsArr = []
    optionsData.forEach(product => {
        if (product.cat === props.headerTab) {
            optionsArr.push(product)
        }
    })

    //Altera o width de acordo com a quantidade de itens
    React.useEffect(() => {
        let newWidth = props.windowWidth * (Math.ceil(optionsArr.length / 3))

        if (props.windowWidth >= 768) {
            newWidth = newWidth / 3 
        } 

        setOptionsWidth(newWidth)
        setTranslateValue(0)
    }, [optionsArr.length, props.windowWidth, props.headerTab])

    React.useEffect(() => disableArrows(), [])

    console.log(translateValue)
    console.log(translateValue < 0)
    // console.log(translateValue > (optionsWidth * -1) + props.windowWidth)
    

    return (
        <Fragment>
            <div className={classes['Options-container']}
                style={optionsStyle}
            >

                {
                    optionsArr.map((option, i) => {
                        let optionsList

                        if ((i + 1) % 3 === 0 || optionsArr.length === i+1) {
                            optionsList =
                                <div key={`${i}+${option}`}>
                                    {
                                        optionsArr.map((prod, ind) => {
                                            let optionProd
                                            if (optionsArr.length === i+1 && (i + 1) % 3 !== 0 && (optionsArr.length - 1) % 3 === 0) {
                                                if (ind <= i && ind > i-1) {
                                                    optionProd = <p key={`${ind}+${prod}`}>{prod.prod}</p>
                                                }
                                            } else if (optionsArr.length === i+1 && (i + 1) % 3 !== 0) {
                                                if (ind <= i && ind > i-2) {
                                                    optionProd = <p key={`${ind}+${prod}`}>{prod.prod}</p>
                                                }
                                            } else {
                                                if (ind <= i && ind > i-3) {
                                                    optionProd = <p key={`${ind}+${prod}`}>{prod.prod}</p>
                                                }
                                            }
                                            
                                            return optionProd
                                        })
                                    }
                                </div>
                        }

                        return optionsList
                    })
                }
            </div>
            {/* <button onClick={() => passMenuOptionsHandler('previous')}>atrás</button>
            <button onClick={() => passMenuOptionsHandler('next')}>frente</button> */}
            <PassSlidesArrows 
                passSlidesFn={arg => passMenuOptionsHandler(arg)}
                color={'#F5C662'}
                bt={'-35px'}
                active={arrows}
            />
        </Fragment>
    )
}

export default MenuOptionsComponent