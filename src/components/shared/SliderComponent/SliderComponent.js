import React from 'react'

import PassSlidesArrows from './PassSlidesArrows/PassSlidesArrows'
import SliderMarkerComponent from './SliderMarkerComponent/SliderMarkerComponent'


const SliderComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)
    let [sliderWidth, setSliderWidth] = React.useState(0)
    let [sliderIndex, setSliderIndex] = React.useState(0)
    let [translateValue, setTranslateValue] =  React.useState(0)
    
    let [initialPosition, setInitialPosition] = React.useState(null)
    let [moving, setMoving] = React.useState(false)
    let [transform, setTransform] = React.useState(0)

    const sliderRef = React.useRef()


    const sliderStyle = {
        width: sliderWidth,
        transform: `translateX(${translateValue}px)`,
        touchAction: 'pan-y'
    }

    const passMenuHandler = dir => {
        let newTranslateValue = parseFloat((sliderRef.current.style.transform).match(/[\d.]+/)[0])*-1
        let newSliderIndex = sliderIndex
        
        if (dir === 'next' && newTranslateValue > (Math.floor(sliderWidth - windowWidth) *-1)) {
            newTranslateValue = windowWidth > 768 ? newTranslateValue - (windowWidth / 3).toFixed(2) : newTranslateValue - windowWidth
            newSliderIndex++
        } 

        if (dir === 'previous' && newTranslateValue < 0) {
            newTranslateValue = windowWidth > 768 ? newTranslateValue + parseFloat((windowWidth / 3).toFixed(2)) : newTranslateValue + windowWidth
            newSliderIndex--
        }

        if (props.parent) {
            sliderRef.current.parentNode.children[3].style.transform = 'translateX(0)'
        }
        
        if (props.setIndex) props.setIndex(newSliderIndex)
        setTranslateValue(newTranslateValue)
        setSliderIndex(newSliderIndex)    
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
            if (newTransform <= (sliderWidth - windowWidth) * -1) newTransform = (sliderWidth - windowWidth) * -1
            sliderRef.current.style.transform = `translate(${newTransform}px)`
        }
    }
    
    const passMenuTouchEnd = () => {
        setMoving(false)
        const sliderRefTransform = parseInt((sliderRef.current.style.transform).match(/\d+/)[0])
        let newReviewIndex = sliderIndex
        
        if (sliderRefTransform*-1 !== translateValue) {
            
            if (sliderRefTransform > (translateValue*-1) + (windowWidth/2)) {
                sliderRef.current.style.transform = `translate(${translateValue - windowWidth}px)`
                newReviewIndex++
                
                setTranslateValue((translateValue - windowWidth))
                setSliderIndex(newReviewIndex)
                if (props.setIndex) props.setIndex(newReviewIndex)
                
            } else if (sliderRefTransform < (translateValue*-1) - (windowWidth/2)) {
                sliderRef.current.style.transform = `translate(${translateValue + windowWidth}px)`
                newReviewIndex--
                
                setTranslateValue((translateValue + windowWidth))
                setSliderIndex(newReviewIndex)
                if (props.setIndex) props.setIndex(newReviewIndex)
                
            } else {
                sliderRef.current.style.transform = `translate(${translateValue}px)`
            }
        }
    }
    
    
    React.useEffect(() => {
        const sliderEl = sliderRef.current
        if (windowWidth < 1366) {
            if (window.PointerEvent) {
                sliderEl.addEventListener('pointerdown', passMenuTouchStart)
                return () =>
                    sliderEl.removeEventListener('pointerdown', passMenuTouchStart)

            } else {
                sliderEl.addEventListener('touchstart', passMenuTouchStart)
                return () =>
                    sliderEl.removeEventListener('touchstart', passMenuTouchStart)
            }
        }

    }, [windowWidth])

    React.useEffect(() => {
        const sliderEl = sliderRef.current
        if (windowWidth < 1366) {
            if (window.PointerEvent) {
                sliderEl.addEventListener('pointermove', passMenuTouchMove)
                return () =>
                    sliderEl.removeEventListener('pointermove', passMenuTouchMove)
            } else {
                sliderEl.addEventListener('touchmove', passMenuTouchMove)
                return () =>
                    sliderEl.removeEventListener('touchmove', passMenuTouchMove)
            }
        }
    })

    React.useEffect(() => {
        const sliderEl = sliderRef.current
        if (windowWidth < 1366) {
            if (window.PointerEvent) {
                sliderEl.addEventListener('pointerup', passMenuTouchEnd)
                return () =>
                    sliderEl.removeEventListener('pointerup', passMenuTouchEnd);
            } else {
                sliderEl.addEventListener('touchend', passMenuTouchEnd)
                return () =>
                    sliderEl.removeEventListener('touchend', passMenuTouchEnd);
            }
        }
    })
    
    /* */

    React.useEffect(() => {
        let newWidth = windowWidth * props.sliderLength
        
        if (windowWidth >= 1366) {
            newWidth = newWidth / 3
        }
        
        setSliderWidth(newWidth)

    }, [props.sliderLength, windowWidth])

    React.useEffect(() => {
        if (props.limitWidth) {
            let childrenArray = Array.from(sliderRef.current.children)
            childrenArray.forEach(el => {
                if (windowWidth < 1366) {
                    el.style.maxWidth = (windowWidth-40)+'px'
                } else {
                    el.style.maxWidth = (windowWidth/3.5)+'px'
                }
            })
        }
    })

    React.useEffect(() => {
        let actualTranslate = parseFloat((sliderRef.current.style.transform).match(/[\d.]+/)[0])

        if (actualTranslate === 0) {
            setSliderIndex(0)
            setTranslateValue(0)
        }
    })    

    
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
                passSlidesFn={dir => passMenuHandler(dir)} 
                color={props.arrowsColor}
                bt={props.arrowsPosition}
                arrowTop={props.arrowTop}
                size={props.arrowsSize}
                arrows={props.arrows}
            />
            <SliderMarkerComponent 
                qtde={props.sliderLength} 
                reviewsIndex={sliderIndex}
                markers={props.markers}
            />
        </React.Fragment>
    )
}

export default SliderComponent