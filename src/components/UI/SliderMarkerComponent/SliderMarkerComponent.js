import React from 'react' 

import classes from './SliderMarkerComponent.module.css'


const SliderMarkerComponent = props => {

    const width = (props.qtde * 10) / 2
    const dotsQtde = Array.from(Array(props.qtde).keys())
    

    return(
        <div 
            style={{width: '100%'}}
            className={classes['SliderMarkers-container']}
        >
            <div style={{width: `${width}%`}}>
                {
                    dotsQtde.map((_, i) => {
                        return <div 
                                    key={i}
                                    className={classes['SliderMarkers-marker']}
                                    style={
                                        props.reviewsIndex === i ? 
                                            {backgroundColor: '#713320'} 
                                        : 
                                            {backgroundColor: '#fff'}
                                    }
                                ></div>
                    })
                }
            </div>
        </div>
    )
}

export default SliderMarkerComponent