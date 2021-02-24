import React from 'react' 

import classes from './SliderMarkerComponent.module.css'


const SliderMarkerComponent = props => {

    const width = (props.qtde * 10) / 2

    return(
        <div 
            style={{width: '100%'}}
            className={classes['SliderMarkers-container']}
        >
            <div style={{width: `${width}%`}}>
                <div className={classes['SliderMarkers-marker']}></div>
                <div className={classes['SliderMarkers-marker']}></div>
                <div className={classes['SliderMarkers-marker']}></div>
            </div>
        </div>
    )
}

export default SliderMarkerComponent