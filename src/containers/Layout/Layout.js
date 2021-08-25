import React, { Component, Fragment } from 'react'

import ApplicationWrapper from '../../helpers/ApplicationWrapper/ApplicationWrapper'
import Header from '../Header/Header'
import CustomerReviews from '../CustomerReviews/CustomerReviews'
import Menu from '../Menu/Menu'
import SobreNos from '../../components/SobreNos/SobreNos'
import Burger from '../../components/Burger/Burger'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'


class Layout extends Component {

    state= {
        resize: true,
    }

    resizeElement = React.createRef();

    callResizeAlert = () => {
        const warned = sessionStorage.getItem('warned')
        if (!warned) {
            alert("ATUALIZE A PÁGINA!\nAlguns componentes necessitam que a página seja atualizada para se ajustarem as novas dimensões.\n\nEsta mensagem não aparecerá novamente nesta sessão, mas é importante que a página seja atualizada sempre que as dimensões forem alteradas.\n\nLembrando que as alterações relevantes se encontram nos breakpoints listados no console.")

            console.log('Breakpoints: \n360px\n414px\n768px\n1366px\n1920px')
        }
        this.observer.unobserve(this.resizeElement.current) 
        sessionStorage.setItem('warned', true)
    }

    componentDidMount() {
        this.observer = new ResizeObserver(() => {
            const rendered = sessionStorage.getItem('rendered')
            if (rendered) {
                this.callResizeAlert()
            }
        })
        
        setTimeout(() => {
            sessionStorage.setItem('rendered', true)
        }, 1000)

        this.observer.observe(this.resizeElement.current)
    }
    

    render() {
        return (
            <ApplicationWrapper ref={this.resizeElement}>
                <Header ref={this.resizeElement} />
                <CustomerReviews />
                <Menu />
                <SobreNos />
                <Burger />
                <Contact/>
                <Footer />
            </ApplicationWrapper>
        )
    }
}

export default Layout