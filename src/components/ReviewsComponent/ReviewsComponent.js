import React from 'react'

import classes from './ReviewsComponent.module.css'

import PassSlidesArrows from '../UI/PassSlidesArrows/PassSlidesArrows';
import SliderComponent from '../shared/SliderComponent'


const ReviewsComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)
    let [reviewsWidth, setReviewsWidth] = React.useState(0)
    let [reviewsIndex, setReviewIndex] = React.useState(props.reviewsIndex)
    let [translateValue, setTranslateValue] =  React.useState(0)
    
    let [initialPosition, setInitialPosition] = React.useState(null)
    let [moving, setMoving] = React.useState(false)
    let [transform, setTransform] = React.useState(0)

    const reviewsRef = React.useRef()

    // const reviewsStyle = {
    //     width: reviewsWidth,
    //     transform: `translateX(${translateValue}px)`
    // }

    const passMenuHandler = dir => {

        let newTranslateValue = translateValue
        let newReviewIndex = reviewsIndex

        if (dir === 'next' && translateValue > ((reviewsWidth - windowWidth) * -1)) {
            newTranslateValue = newTranslateValue - (windowWidth / 3)
            newReviewIndex++
        } 

        if (dir === 'previous' && translateValue < 0) {
            newTranslateValue = newTranslateValue + (windowWidth / 3)
            newReviewIndex--
        }

        setTranslateValue(newTranslateValue)
        setReviewIndex(newReviewIndex)
        props.setReviewIndex(newReviewIndex)
    }

    /* CONFIGURAÇÃO TOUCH */
    // const passMenuTouchStart = e => {
    //     const transformMatrix = window.getComputedStyle(reviewsRef.current).getPropertyValue(`transform`)
    //     setInitialPosition(e.pageX)
    //     setMoving(true)
    //     setTransform(parseInt(transformMatrix.split(',')[4]))
    // }
    
    // const passMenuTouchMove = e => {
    //     if (moving) {
    //         const currentPosition = e.pageX
    //         const diff = currentPosition - initialPosition
    //         let newTransform = transform + diff
    //         if (newTransform > 0) newTransform = 0
    //         if (newTransform <= (reviewsWidth - windowWidth) * -1) newTransform = (reviewsWidth - windowWidth) * -1
    //         reviewsRef.current.style.transform = `translate(${newTransform}px)`
    //     }
    // }

    // const passMenuTouchEnd = () => {
    //     setMoving(false)
    //     const reviewsRefTransform = parseInt((reviewsRef.current.style.transform).match(/\d+/)[0])
    //     let newReviewIndex = reviewsIndex
        
    //     if (reviewsRefTransform*-1 !== translateValue) {
            
    //         if (reviewsRefTransform > (translateValue*-1) + (windowWidth/2)) {
    //             reviewsRef.current.style.transform = `translate(${translateValue - windowWidth}px)`
    //             newReviewIndex++

    //             setTranslateValue((translateValue - windowWidth))
    //             setReviewIndex(newReviewIndex)
    //             props.setReviewIndex(newReviewIndex)
                
    //         } else if (reviewsRefTransform < (translateValue*-1) - (windowWidth/2)) {
    //             reviewsRef.current.style.transform = `translate(${translateValue + windowWidth}px)`
    //             newReviewIndex--

    //             setTranslateValue((translateValue + windowWidth))
    //             setReviewIndex(newReviewIndex)
    //             props.setReviewIndex(newReviewIndex)
                
    //         } else {
    //             reviewsRef.current.style.transform = `translate(${translateValue}px)`
    //         }
    //     }
    // }
    
    // React.useEffect(() => {
    //     const reviewsEl = reviewsRef.current
    //     if (windowWidth < 1200) {
    //         if (window.PointerEvent) {
    //             reviewsEl.addEventListener('pointerdown', passMenuTouchStart)
    //             return () =>
    //                 reviewsEl.removeEventListener('pointerdown', passMenuTouchStart);

    //         } else {
    //             reviewsEl.addEventListener('touchdown', passMenuTouchStart)
    //             return () =>
    //                 reviewsEl.removeEventListener('touchdown', passMenuTouchStart);
    //         }
    //     }

    // }, [windowWidth])

    // React.useEffect(() => {
    //     const reviewsEl = reviewsRef.current
    //     if (windowWidth < 1200) {
    //         if (window.PointerEvent) {
    //             reviewsEl.addEventListener('pointermove', passMenuTouchMove)
    //             return () =>
    //                 reviewsEl.removeEventListener('pointermove', passMenuTouchMove);
    //         } else {
    //             reviewsEl.addEventListener('touchmove', passMenuTouchMove)
    //             return () =>
    //                 reviewsEl.removeEventListener('touchmove', passMenuTouchMove);
    //         }
    //     }
    // })

    // React.useEffect(() => {
    //     const reviewsEl = reviewsRef.current
    //     if (windowWidth < 1200) {
    //         if (window.PointerEvent) {
    //             reviewsEl.addEventListener('pointerup', passMenuTouchEnd)
    //             return () =>
    //                 reviewsEl.removeEventListener('pointerup', passMenuTouchEnd);
    //         } else {
    //             reviewsEl.addEventListener('touchdown', passMenuTouchEnd)
    //             return () =>
    //                 reviewsEl.removeEventListener('touchdown', passMenuTouchEnd);
    //         }
    //     }
    // })
    
    /* */
    
    React.useEffect(() => {
        let newWidth = windowWidth * props.reviews.length

        if (windowWidth >= 1200) {
            newWidth = newWidth / 3
        }
        
        setReviewsWidth(newWidth)
    }, [props.reviews.length, windowWidth])

    


    return(
        <React.Fragment>
            {/* <div 
                className={classes['Reviews-container']}
                style={reviewsStyle}
                ref={reviewsRef}
            > */}
            <SliderComponent 
                classStyle={classes['Reviews-container']}
                // styleDynamic={reviewsStyle}
                // childRef={reviewsRef}
                sliderLength={props.reviews.length}
            >
                {
                    props.reviews.map((customer, i) => {
                        return <div 
                                    key={`${i}-${customer}`} 
                                    className={classes['Review-container']}
                                >   
                                    {customer.sexo === 'masculino' ? 
                                        <img src={require('../../assets/icons/man.svg').default} alt="Ícone Homem" /> 
                                        :
                                        <img src={require('../../assets/icons/woman.svg').default} alt="Ícone Mulher" /> 
                                    }
                                    <p>{customer.texto}</p>
                                    <strong>{customer.nome}</strong>
                                </div>
                    })
                }
            </SliderComponent>
            {/* </div> */}
            <PassSlidesArrows passSlidesFn={arg => passMenuHandler(arg)} />
        </React.Fragment>
        
    )
}

export default ReviewsComponent