import React from 'react' 

import classes from './SliderMarkerComponent.module.css'


const SliderMarkerComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)

    const width = (props.qtde * 10) / 2
    const dotsQtde = Array.from(Array(props.qtde).keys())

    const style = {
        width: '100%',
        display: props.markers === false ? 'none' : 'flex'
    }
    
    
    return(
        <div 
            className={classes['SliderMarkers-container']}
            style={style}
        >
            <div style={{width: `${width}%`}}>
                {
                    dotsQtde.map((_, i) => {
                        return <div 
                                    key={i}
                                    className={classes['SliderMarkers-marker']}
                                    style={windowWidth >= 1366 ? 
                                            (i <= props.reviewsIndex + 2 && i > props.reviewsIndex - 1 ? 
                                                {backgroundColor: '#713320'} : 
                                                {backgroundColor: '#fff'}
                                            ) 
                                            :
                                            (props.reviewsIndex === i ?
                                                {backgroundColor: '#713320'} : 
                                                {backgroundColor: '#fff'}
                                            )
                                        }
                                    
                                ></div>
                    })
                }
            </div>
        </div>
    )
}

export default SliderMarkerComponent