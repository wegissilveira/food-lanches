import React from 'react'

import classes from './ReviewComponent.module.css'

import {ReactComponent as Man} from '../../../assets/icons/man.svg'
import {ReactComponent as Woman} from '../../../assets/icons/woman.svg'


const ReviewComponent = props => {
    return(
        <div className={classes['Review-container']}>
            <p>Não sou de deixar elogios em pedidos que faço, mas estou super satisfeita com a comida e o atendimento prestado pela Food. Recomendo!</p>
            <strong>{props.name}</strong>
        </div>
    )
}

export default ReviewComponent