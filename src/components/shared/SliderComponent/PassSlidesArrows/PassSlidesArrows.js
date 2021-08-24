import React from 'react'

import classes from './PassSlidesArrows.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PassSlidesArrows = props => {
    const style={
        color: props.color,
        bottom: props.bt,
        top: props.arrowTop,
        fontSize: props.size !== undefined ? props.size+'em' : '3em',
        display: props.arrows ? 'flex' : 'none'
    }    

    return (
        <div className={
            classes['Reviews-arrows--container']}
            style={style}
        >
            <FontAwesomeIcon 
                icon={['fas', 'chevron-left']} 
                onClick={() => props.passSlidesFn('previous')}
            />
            <FontAwesomeIcon 
                icon={['fas', 'chevron-right']} 
                onClick={() => props.passSlidesFn('next')}
            />
        </div>
    )
}

export default PassSlidesArrows