import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Div, Logo, Category, Container, Badge, ImageShopCart, Loggout } from './Styles'

import Image from '../../images/logo.png'
import ShopCart from '../../images/shopcart.png'

export default function Menu({ history }) {
    function loggout(){
        localStorage.removeItem('token')
       
    }
    return (
        <Nav>
            <Div>
                <Logo src={Image}/>
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
