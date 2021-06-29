import React from 'react'

import classes from './SobreNos.module.css'


const SobreNos = props => {
    return (
        <div className={classes['SobreNos-container']}>
            <h1>Sobre Nós</h1>
            <p>
                A Food Lanches nasceu com o objetivo de proporcionar os melhores Lanches utilizando os ingredientes mais puros e saborosos do mercado. Após anos de pesquisa, desenvolvimento e criações premiadas acreditamos que alcançamos o mais alto nível na produção de hambúrgueres, massas e sanduíches dos mais variados sabores. Focamos sempre na qualidade, na experiência do que deve ser desfrutar um lanche, e isso faz de nós os melhores no que fazemos.
            </p>
            <img src={require('../../assets/images/sobreNosTable.jpg').default} alt="table" />
        </div>
    )
}

export default SobreNos