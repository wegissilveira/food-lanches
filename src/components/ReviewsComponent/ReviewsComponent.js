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

    const touchStart = e => {
        const transformMatrix = window.getComputedStyle(reviewsRef.current).getPropertyValue(`transform`)
        setInitialPosition(e.pageX)
        setMoving(true)
        setTransform(parseInt(transformMatrix.split(',')[4]))
    }
    
    const touchMove = e => {
        if (moving) {
            const currentPosition = e.pageX
            const diff = currentPosition - initialPosition
            let newTransform = transform + diff
            if (newTransform > 0) newTransform = 0
            if (newTransform <= (reviewsWidth - windowWidth) * -1) newTransform = (reviewsWidth - windowWidth) * -1
            reviewsRef.current.style.transform = `translate(${newTransform}px)`
        }
    }

    const touchEnd = () => {
        setMoving(false)
        const reviewsRefTransform = parseInt((reviewsRef.current.style.transform).match(/\d+/)[0])
        let newReviewIndex = reviewsIndex
        
        if (reviewsRefTransform *-1 !== translateValue) {
            if (reviewsRefTransform > (translateValue*-1) + (windowWidth /2)) {
                reviewsRef.current.style.transform = `translate(${translateValue - windowWidth}px)`
                setTranslateValue((translateValue - windowWidth))
                newReviewIndex++
                setReviewIndex(newReviewIndex)
                props.setReviewIndex(newReviewIndex)
                
            } else if (reviewsRefTransform < (translateValue*-1) - (windowWidth /2)) {
                reviewsRef.current.style.transform = `translate(${translateValue + windowWidth}px)`
                setTranslateValue((translateValue + windowWidth))
                newReviewIndex--
                setReviewIndex(newReviewIndex)
                props.setReviewIndex(newReviewIndex)
                
            } else {
                reviewsRef.current.style.transform = `translate(${translateValue}px)`
                
            }
        }
    }
    
    React.useEffect(() => {
        const reviewsEl = reviewsRef.current
        if (windowWidth <= 1200) {
            reviewsEl.addEventListener('pointerdown', touchStart)

            return () =>
            reviewsEl.removeEventListener('pointerdown', touchStart);
        }
    },[windowWidth])

    React.useEffect(() => {
        const reviewsEl = reviewsRef.current
        if (windowWidth <= 1200) {
            reviewsEl.addEventListener('pointermove', touchMove)

            return () =>
            reviewsEl.removeEventListener('pointermove', touchMove);
        }
    })

    React.useEffect(() => {
        const reviewsEl = reviewsRef.current
        if (windowWidth <= 1200) {
            reviewsEl.addEventListener('pointerup', touchEnd)

            return () =>
            reviewsEl.removeEventListener('pointerup', touchEnd);
        }
    })
    

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