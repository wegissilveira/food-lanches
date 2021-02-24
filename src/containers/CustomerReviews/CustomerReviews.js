import React, { Component } from 'react'

import classes from './CustomerReviews.module.css'

import ReviewsComponent from '../../components/ReviewsComponent/ReviewsComponent'
import SliderMarkerComponent from '../../components/UI/SliderMarkerComponent/SliderMarkerComponent'


class CustomerReviews extends Component {
    render() {
        return(
            <div className={classes['Reviews-section']}>
                <div className={classes['Reviews-container']}>
                    <ReviewsComponent />
                    <SliderMarkerComponent qtde={3} />
                </div>
            </div>
        )
    }
}

export default CustomerReviews