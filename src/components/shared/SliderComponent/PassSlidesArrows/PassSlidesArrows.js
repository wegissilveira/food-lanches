import React from 'react'

import classes from './PassSlidesArrows.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PassSlidesArrows = props => {
    let [windowWidth, ] = React.useState(window.innerWidth)

    const style={
        color: props.color,
        bottom: props.bt,
        fontSize: props.size !== undefined ? props.size+'em' : '3em',
        display: props.arrows === false || windowWidth < 1200 ? 'none' : 'flex'
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