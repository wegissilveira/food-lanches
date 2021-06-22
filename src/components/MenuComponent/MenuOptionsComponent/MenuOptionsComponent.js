import React, { Fragment } from 'react'

import classes from './MenuOptionsComponent.module.css'

import optionsData from '../../../Data/optionsData'


const MenuOptionsComponent = props => {

    let [optionsWidth, setOptionsWidth] = React.useState(0)
    let [translateValue, setTranslateValue] = React.useState(0)


    const optionsStyle = {
        width: optionsWidth,
        transform: `translateX(${translateValue}px)`
    }

    const passMenuOptionsHandler = (dir) => {

        if (dir === 'next' && translateValue > (optionsWidth * -1) + props.windowWidth) {
            setTranslateValue(translateValue - props.windowWidth)
        } 

        if (dir === 'previous' && translateValue < 0) {
            setTranslateValue(translateValue + props.windowWidth)
        }        
    }

    let optionsArr = []
    optionsData.forEach(product => {
        if (product.cat === props.headerTab) {
            optionsArr.push(product)
        }
    })

    //Altera o width de acordo com a quantidade de itens
    React.useEffect(() => {
        setOptionsWidth(props.windowWidth * (Math.ceil(optionsArr.length / 3)))
        setTranslateValue(0)
    }, [optionsArr.length, props.windowWidth, props.headerTab])



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
        </Fragment>
    )
}

export default MenuOptionsComponent