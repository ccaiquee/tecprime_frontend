import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Div, Title, Category, Container, Badge, ImageShopCart, Loggout } from './Styles'

import ShopCart from '../../images/shopcart.png'

export default function Menu({ history }) {
    function loggout(){
        localStorage.removeItem('token')
       
    }
    return (
        <Nav>
            <Div>
                <Title>TecPrime</Title>
                <Link to='/Categorias'>
                    <Category>Categorias</Category>                    
                </Link>
            </Div>

            <Container>
                <Link to='/Carrinho'>
                    <Badge hasUnread>
                        <ImageShopCart alt='Avatar' src={ShopCart}/>                         
                    </Badge>       
                </Link> 
                
                <Loggout onClick={loggout}>Sair</Loggout>                       
            </Container>
        </Nav>
    )
}
