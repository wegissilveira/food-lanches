import React from 'react'

import classes from './ReviewsComponent.module.css'

import SliderComponent from '../shared/SliderComponent/SliderComponent'


const ReviewsComponent = props => {

    let [windowWidth, ] = React.useState(window.innerWidth)

    return(
        <React.Fragment>
            <SliderComponent 
                classStyle={classes['Reviews-container']}
                sliderLength={props.reviews.length}
                limitWidth={true}
                arrows={windowWidth < 1366 ? false : true}
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