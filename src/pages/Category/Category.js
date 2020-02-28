import React, { useState, useEffect } from 'react'

import { Container, Title, Ul, Li } from './Styles'

import api from '../../services/api'

export default function Product({ history }) {
    const [ category, setCategory ] = useState([])
    const [ product, setProduct ] = useState([])

    useEffect(() => {
        async function loadCategory(){
            const response = await api.get('/categories')
            
            setCategory(response.data)
        }        
        loadCategory()       
    },[])

    function Product(id){
        history.push(`/Categorias/Produtos/:${id}`)
    }

    return (
        <Container>
            <Title>Categorias de Produtos</Title>
            <Ul>
                {category.map(cat => (
                   <Li onClick={() => Product(cat.id)} key={cat.id}>{cat.nome}</Li>                  
                ))}                             
            </Ul>
        </Container>
    )
}
