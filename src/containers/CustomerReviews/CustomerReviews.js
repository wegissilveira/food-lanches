import React, { Component } from 'react'

import classes from './CustomerReviews.module.css'

import ReviewsComponent from '../../components/ReviewsComponent/ReviewsComponent'

import customersReviewsData from '../../Data/customersReviewsData'


class CustomerReviews extends Component {  

    render() {
        return(
            <div className={classes['Reviews-section']}>
                <div className={classes['Reviews-section--container']}>
                    <ReviewsComponent 
                        reviews={customersReviewsData}
                    />
                </div>
            </div>
        )
    }
}

export default CustomerReviews