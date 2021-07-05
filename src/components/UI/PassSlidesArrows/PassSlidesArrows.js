import React from 'react'

import classes from './PassSlidesArrows.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PassSlidesArrows = props => {

    const style={
        color: props.color,
        bottom: props.bt
    }

    let arrowLeftStyle
    let arrowRightStyle
    if (props.active !== undefined) {
        arrowLeftStyle={
            cursor: props.active[0] === false ? 'default' : 'pointer',
            color: props.active[0] === false ? 'red' : 'blue'
        }
    
        arrowRightStyle={
            cursor: props.active[1] === false ? 'default' : 'pointer',
            color: props.active[1] === false ? 'red' : 'blue'
        }
    }

    // console.log(props.active)
    

    return (
        <div className={
            classes['Reviews-arrows--container']}
            style={style}
        >
            <FontAwesomeIcon 
                icon={['fas', 'chevron-left']} 
                size="3x"
                onClick={() => props.passSlidesFn('previous')}
                style={arrowLeftStyle}
            />
            <FontAwesomeIcon 
                icon={['fas', 'chevron-right']} 
                size="3x"
                onClick={() => props.passSlidesFn('next')}
                style={arrowRightStyle}
            />
        </div>
    )
}

export default PassSlidesArrows