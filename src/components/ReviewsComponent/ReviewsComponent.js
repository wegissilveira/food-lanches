import React from 'react'

import classes from './ReviewsComponent.module.css'

import SliderComponent from '../shared/SliderComponent/SliderComponent'


const ReviewsComponent = props => {

    return(
        <React.Fragment>
            <SliderComponent 
                classStyle={classes['Reviews-container']}
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
        </React.Fragment>
        
    )
}

export default ReviewsComponent