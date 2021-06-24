import React from 'react'

import classes from './ReviewsComponent.module.css'


const ReviewsComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)
    let [reviewsWidth, ] = React.useState(windowWidth * props.reviews.length)
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
            newTranslateValue = newTranslateValue - windowWidth
            newReviewIndex++
        } 

        if (dir === 'previous' && translateValue < 0) {
            newTranslateValue = newTranslateValue + windowWidth
            newReviewIndex--
        }

        setTranslateValue(newTranslateValue)
        setReviewIndex(newReviewIndex)
        props.setReviewIndex(newReviewIndex)
    }



    return(
        //REMOVER ESSE FRAGMENT. ESTÁ AQUI SÓ PARA TESTES
        <React.Fragment>
            <div 
                className={classes['Reviews-container']}
                style={reviewsStyle}
            >
                {
                    props.reviews.map((customer, i) => {
                        return <div key={`${i}-${customer}`} className={classes['Review-container']}>
                                    <p>{customer.texto}</p>
                                    <strong>{customer.nome}</strong>
                                </div>
                    })
               }
            </div>
            {/* <button onClick={() => passMenuHandler('previous')}>Trás</button>
            <button onClick={() => passMenuHandler('next')}>Frente</button> */}
        </React.Fragment>
        
    )
}

export default ReviewsComponent