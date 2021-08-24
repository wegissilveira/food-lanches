import React, { Fragment } from 'react'

import classes from './MenuOptionsComponent.module.css'

import optionsData from '../../../Data/optionsData'
import SliderComponent from '../../shared/SliderComponent/SliderComponent'


const MenuOptionsComponent = props => {

    let [arrowsSize, setArrowsSize] = React.useState(3)
    let [windowWidth, ] = React.useState(window.innerWidth)

    let optionsArr = []
    optionsData.forEach(product => {
        if (product.cat === props.headerTab) {
            optionsArr.push(product)
        }
    })

    //Altera o width de acordo com a quantidade de itens
    React.useEffect(() => {
        let arrows = arrowsSize

        if (props.windowWidth >= 1578) {
            arrows = 4
        } else {
            arrows = 3
        }

        setArrowsSize(arrows)
    }, [props.windowWidth, arrowsSize])
   

    return (
        <Fragment>
            <SliderComponent
                classStyle={classes['Options-container']}
                sliderLength={Math.ceil(optionsArr.length / 3)}
                arrowsColor={'#F5C662'}
                arrowsPosition={'-35px'}
                arrowsSize={arrowsSize}
                markers={false}
                arrows={windowWidth < 1366 ? false : true}
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
            </SliderComponent>
        </Fragment>
    )
}

export default MenuOptionsComponent