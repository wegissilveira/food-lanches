import React, { Component } from 'react'

import classes from './CustomerReviews.module.css'

import ReviewsComponent from '../../components/ReviewsComponent/ReviewsComponent'
import SliderMarkerComponent from '../../components/UI/SliderMarkerComponent/SliderMarkerComponent'

import customersReviewsData from '../../Data/customersReviewsData'


class CustomerReviews extends Component {

    state = {
        reviewsIndex: 0,
    }


    setIndexCallback = i => {
        this.setState({reviewsIndex: i})        
    }
    


    render() {
        
        return(
            <div className={classes['Reviews-section']}>
                <div className={classes['Reviews-section--container']}>
                    <ReviewsComponent 
                        reviews={customersReviewsData}
                        reviewsIndex={this.state.reviewsIndex}
                        setReviewIndex={i => this.setIndexCallback(i)}
                    />
                    <SliderMarkerComponent 
                        qtde={customersReviewsData.length}
                        reviewsIndex={this.state.reviewsIndex}
                    />
                </div>
            </div>
        )
    }
}

export default CustomerReviews