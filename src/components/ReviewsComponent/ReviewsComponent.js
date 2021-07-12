import React from 'react'

import classes from './ReviewsComponent.module.css'

import PassSlidesArrows from '../UI/PassSlidesArrows/PassSlidesArrows';


const ReviewsComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)
    let [reviewsWidth, setReviewsWidth] = React.useState(0)
    let [translateValue, setTranslateValue] =  React.useState(0)
    let [reviewsIndex, setReviewIndex] = React.useState(props.reviewsIndex)


    


    const reviewsStyle = {
        width: reviewsWidth,
        transform: `translateX(${translateValue}px)`
    }

    const passMenuHandler = dir => {

        let newTranslateValue = translateValue
        let newReviewIndex = reviewsIndex

        if (dir === 'next' && translateValue > ((reviewsWidth - windowWidth) * -1)) {
            
            if (windowWidth >= 1200) {
                newTranslateValue = newTranslateValue - (windowWidth / 3)
            } else {
                newTranslateValue = newTranslateValue - windowWidth
            }
            newReviewIndex++
        } 

        if (dir === 'previous' && translateValue < 0) {
            
            if (windowWidth >= 1200) {
                newTranslateValue = newTranslateValue + (windowWidth / 3)
            } else {
                newTranslateValue = newTranslateValue + windowWidth
            }
            newReviewIndex--
        }

        setTranslateValue(newTranslateValue)
        setReviewIndex(newReviewIndex)
        props.setReviewIndex(newReviewIndex)
    }

    React.useEffect(() => {
        let newWidth = windowWidth * props.reviews.length

        if (windowWidth >= 1200) {
            newWidth = newWidth / 3
        }
        
        setReviewsWidth(newWidth)
    }, [props.reviews.length, windowWidth])


    /* TOUCH CONFIGURATION */
    const reviewsRef = React.useRef()

    let [initialPosition, setInitialPosition] = React.useState(null)
    let [moving, setMoving] = React.useState(false)
    let [transform, setTransform] = React.useState(0)

    const gestureStart = e => {
        const transformMatrix = window.getComputedStyle(reviewsRef.current).getPropertyValue(`transform`)
        setInitialPosition(e.pageX)
        setMoving(true)
        setTransform(parseInt(transformMatrix.split(',')[4]))
    }
    
    const gestureMove = e => {
        if (moving) {
            const currentPosition = e.pageX
            const diff = currentPosition - initialPosition
            reviewsRef.current.style.transform = `translate(${transform + diff}px)`
        }
    }

    const gestureEnd = e => {
        setMoving(false)
    }

    React.useEffect(() => {
        window.addEventListener('pointerdown', gestureStart)

        return () =>
          window.removeEventListener('pointerdown', gestureStart);
    }, [])

    React.useEffect(() => {
        window.addEventListener('pointermove', gestureMove)

        return () =>
          window.removeEventListener('pointermove', gestureMove);
    })

    React.useEffect(() => {
        window.addEventListener('pointerup', gestureEnd)

        return () =>
          window.removeEventListener('pointerup', gestureEnd);
    }, [])

    /* */
    


    return(
        <React.Fragment>
            <div 
                className={classes['Reviews-container']}
                style={reviewsStyle}
                ref={reviewsRef}
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
                
            </div>
            <PassSlidesArrows passSlidesFn={arg => passMenuHandler(arg)} />
        </React.Fragment>
        
    )
}

export default ReviewsComponent