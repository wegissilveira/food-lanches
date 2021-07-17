import React from 'react'

import PassSlidesArrows from './PassSlidesArrows/PassSlidesArrows'
import SliderMarkerComponent from './SliderMarkerComponent/SliderMarkerComponent'


const SliderComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)
    let [reviewsWidth, setReviewsWidth] = React.useState(0)
    let [reviewsIndex, setReviewIndex] = React.useState(0)
    let [translateValue, setTranslateValue] =  React.useState(0)
    
    let [initialPosition, setInitialPosition] = React.useState(null)
    let [moving, setMoving] = React.useState(false)
    let [transform, setTransform] = React.useState(0)

    const sliderRef = React.useRef()

    const sliderStyle = {
        width: reviewsWidth,
        transform: `translateX(${translateValue}px)`
    }
    
    const passMenuHandler = dir => {
        let newTranslateValue = parseInt((sliderRef.current.style.transform).match(/\d+/)[0])*-1
        let newReviewIndex = reviewsIndex

        if (dir === 'next' && newTranslateValue > ((reviewsWidth - windowWidth) * -1)) {
            newTranslateValue = newTranslateValue - (windowWidth / 3)
            newReviewIndex++
        } 

        if (dir === 'previous' && newTranslateValue < 0) {
            newTranslateValue = newTranslateValue + (windowWidth / 3)
            newReviewIndex--
        }
        
        setTranslateValue(newTranslateValue)
        setReviewIndex(newReviewIndex)        
    }

    /* CONFIGURAÇÃO TOUCH */
    const passMenuTouchStart = e => {
        const transformMatrix = window.getComputedStyle(sliderRef.current).getPropertyValue(`transform`)
        setInitialPosition(e.pageX)
        setMoving(true)
        setTransform(parseInt(transformMatrix.split(',')[4]))
    }
    
    const passMenuTouchMove = e => {
        if (moving) {
            const currentPosition = e.pageX
            const diff = currentPosition - initialPosition
            let newTransform = transform + diff
            if (newTransform > 0) newTransform = 0
            if (newTransform <= (reviewsWidth - windowWidth) * -1) newTransform = (reviewsWidth - windowWidth) * -1
            sliderRef.current.style.transform = `translate(${newTransform}px)`
        }
    }

    const passMenuTouchEnd = () => {
        setMoving(false)
        const sliderRefTransform = parseInt((sliderRef.current.style.transform).match(/\d+/)[0])
        let newReviewIndex = reviewsIndex
        
        if (sliderRefTransform*-1 !== translateValue) {
            
            if (sliderRefTransform > (translateValue*-1) + (windowWidth/2)) {
                sliderRef.current.style.transform = `translate(${translateValue - windowWidth}px)`
                newReviewIndex++

                setTranslateValue((translateValue - windowWidth))
                setReviewIndex(newReviewIndex)
                if (props.setIndex) props.setIndex(newReviewIndex)
                
            } else if (sliderRefTransform < (translateValue*-1) - (windowWidth/2)) {
                sliderRef.current.style.transform = `translate(${translateValue + windowWidth}px)`
                newReviewIndex--

                setTranslateValue((translateValue + windowWidth))
                setReviewIndex(newReviewIndex)
                if (props.setIndex) props.setIndex(newReviewIndex)
                
            } else {
                sliderRef.current.style.transform = `translate(${translateValue}px)`
            }

            if (props.parent) {
                sliderRef.current.parentNode.children[3].style.transform = 'translateX(0)'
            }
        }
    }
    
    React.useEffect(() => {
        const sliderEl = sliderRef.current
        if (windowWidth < 1200) {
            if (window.PointerEvent) {
                sliderEl.addEventListener('pointerdown', passMenuTouchStart)
                return () =>
                    sliderEl.removeEventListener('pointerdown', passMenuTouchStart);

            } else {
                sliderEl.addEventListener('touchdown', passMenuTouchStart)
                return () =>
                    sliderEl.removeEventListener('touchdown', passMenuTouchStart);
            }
        }

    }, [windowWidth])

    React.useEffect(() => {
        const sliderEl = sliderRef.current
        if (windowWidth < 1200) {
            if (window.PointerEvent) {
                sliderEl.addEventListener('pointermove', passMenuTouchMove)
                return () =>
                    sliderEl.removeEventListener('pointermove', passMenuTouchMove);
            } else {
                sliderEl.addEventListener('touchmove', passMenuTouchMove)
                return () =>
                    sliderEl.removeEventListener('touchmove', passMenuTouchMove);
            }
        }
    })

    React.useEffect(() => {
        const sliderEl = sliderRef.current
        if (windowWidth < 1200) {
            if (window.PointerEvent) {
                sliderEl.addEventListener('pointerup', passMenuTouchEnd)
                return () =>
                    sliderEl.removeEventListener('pointerup', passMenuTouchEnd);
            } else {
                sliderEl.addEventListener('touchdown', passMenuTouchEnd)
                return () =>
                    sliderEl.removeEventListener('touchdown', passMenuTouchEnd);
            }
        }
    })
    
    /* */

    React.useEffect(() => {
        let newWidth = windowWidth * props.sliderLength

        if (windowWidth >= 1200) {
            newWidth = newWidth / 3
        }
        
        setReviewsWidth(newWidth)
    }, [props.sliderLength, windowWidth])
    


    return (
        <React.Fragment>
            <div 
                className={props.classStyle}
                style={sliderStyle}
                ref={sliderRef}
            >
                {props.children}
                
            </div>
            <PassSlidesArrows 
                passSlidesFn={arg => passMenuHandler(arg)} 
                color={props.arrowsColor}
                bt={props.arrowsPosition}
                size={props.arrowsSize}
                arrows={props.arrows}
            />
            <SliderMarkerComponent 
                qtde={props.sliderLength} 
                reviewsIndex={reviewsIndex}
                markers={props.markers}
            />
        </React.Fragment>
    )
}

export default SliderComponent