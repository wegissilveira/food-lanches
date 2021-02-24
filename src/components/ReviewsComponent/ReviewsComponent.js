import React from 'react'

import classes from './ReviewsComponent.module.css'

import ReviewComponent from './ReviewComponent/ReviewComponent'


const ReviewsComponent = props => {
    return(
        <div className={classes['Reviews-container']}>
            <ReviewComponent name={'Marcela'} />
            <ReviewComponent name={'Carlos'} />
            <ReviewComponent name={'Joana'} />
        </div>
    )
}

export default ReviewsComponent