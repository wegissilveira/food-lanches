import React from 'react'

import classes from './Contact.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = props => {
    return (
        <div className={classes['Contact-container']}>
            <div className={classes['Contact-subContainer']}>
                <h1>CONTATO</h1>
                <p>Não hesite em entrar em contato no caso de qualquer dúvida</p>
                <div className={classes['Contact-header']}>
                    <div>
                        <FontAwesomeIcon 
                            icon={['fas', 'map-marker-alt']} 
                        />
                        <p>Sempre uma loja próxima a você</p>
                    </div>
                    <div>
                        <FontAwesomeIcon 
                            icon={['fas', 'phone']} 
                        />
                        <p>33 3333 3333</p>
                    </div>
                    <div>
                         <FontAwesomeIcon 
                            icon={['fas', 'envelope']} 
                        />
                        <p>emailfoodlanches@food.com</p>
                    </div>                    
                </div>
                <form>
                    <input placeholder="Nome"/>
                    <input placeholder="E-mail"/>
                    <textarea placeholder="Sua mensagem" />
                    <button>ENVIAR MENSAGEM</button>
                </form>
            </div>
        </div>
    )
}

export default Contact