import React from 'react'

import classes from './PassSlidesArrows.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PassSlidesArrows = props => {

    const style={
        color: props.color,
        bottom: props.bt
    }    

    return (
        <div className={
            classes['Reviews-arrows--container']}
            style={style}
        >
            <FontAwesomeIcon 
                icon={['fas', 'chevron-left']} 
                size="3x"
                onClick={() => props.passSlidesFn('previous')}
            />
            <FontAwesomeIcon 
                icon={['fas', 'chevron-right']} 
                size="3x"
                onClick={() => props.passSlidesFn('next')}
            />
        </div>
    )
}

export default PassSlidesArrows