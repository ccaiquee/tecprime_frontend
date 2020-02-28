import React, { useState, useEffect } from 'react'

import api from '../../services/api'
import apinode from '../../services/apinode'

import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Container, Table, Thead, Tbody, Tr, Th, Td, Amount, ButtonBuy } from './Styles'

export default function Product(props) {
    const [ products, setProducts ] = useState([])
    const [ qtd, setQtd ] = useState(0)

    useEffect(() => {
        async function loadProducts(){
            const categoryId = props.match.params.id.split(':')
            
            const response = await api.post('/products', { category:categoryId[1] })            
            setProducts(response.data)
        }
        loadProducts()
    },[])

    async function shoppingCart(data, qtd){
        const { id, nome, preco, categoria_id } = data
        
        try {           
            const authorization = localStorage.getItem('token')

            const response = await apinode.post('/shoppingcart', { 
                produto_id: id, nome, preco, categoria_id, qtd
            }, { headers: { authorization }} )

            setQtd('s')
            return toast.success('Produto adicionado com sucesso no carrinho')            
        }
        catch(err){
            return toast.error('Não foi possível adicionar o produto ao carrinho :(')
        }
    }

    return (
        <Container>
            <Table>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Nome</Th>
                        <Th>Descrição</Th>
                        <Th>Preço</Th>
                        <Th>Quantidade</Th>
                        <Th>Ação</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {products.map(prod => (
                        <Tr key={prod.id}>
                            <Td>{prod.id}</Td>
                            <Td>{prod.nome}</Td>
                            <Td>{prod.descricao}</Td>
                            <Td>{prod.preco.toFixed(2)}</Td>
                            <Td>                                
                                <Amount 
                                    name='quantidade'
                                    type='text'
                                    placeholder='0'
                                    value={prod.qtd}
                                    onChange={event => setQtd(event.target.value)}/>                                
                            </Td>
                            <Td>
                                <ButtonBuy onClick={() => {shoppingCart(prod, qtd)}}>Adicionar</ButtonBuy>   
                                <ToastContainer/>                             
                            </Td>
                        </Tr>
                    ))}                    
                </Tbody>
            </Table>           
        </Container>
    )
}
