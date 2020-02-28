import React, { useState, useEffect } from 'react'

import apinode from '../../services/apinode'

import Remove from '../../images/delete.png'

import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Container, Table, Thead, Tbody, Tr, Th, Td, Icon, Amount, Update, Fooster, Checkout } from './Styles'

export default function Product() {
    const [ products, setProducts ] = useState([])
    const [ qtd, setQtd ] = useState(0)   
    
    useEffect(() => {
        async function loadProducts(){       
            const authorization = localStorage.getItem('token')     
            const response = await apinode.get('/shoppingcart', { headers: { authorization }})            
            setProducts(response.data)
            
        }     
        loadProducts()
      
    },[products])
    async function removeProduct(id){        
        const authorization = localStorage.getItem('token')     

        const response = await apinode.delete('/shoppingcart', { params: { id }, headers: { authorization }})
        return toast.success("Produto deletado com sucesso!");
    }
    async function decrementProduct(decrement, id){
        try{
            const authorization = localStorage.getItem('token')
            const qtd = decrement -1        
           
            const response = await apinode.put('/shoppingcart', {qtd, id}, {headers: { authorization }})
        }
        catch(err){
            return toast.success("Não foi possível diminuir a quantidade do produto :(")
        }
    }
    async function incrementProduct(decrement, id){
        try{
            const authorization = localStorage.getItem('token')
            const qtd = decrement +1

            const response = await apinode.put('/shoppingcart', {qtd, id}, {headers: { authorization }})
        }
        catch(err){
            return toast.success("Não foi possível aumentar a quantidade do produto :(");
        }
    }
    async function checkout(){
        try{
            const authorization = localStorage.getItem('token')

            const response = await apinode.delete('/shoppingcart/checkout', {headers: { authorization }})
            return toast.success("Compra finalizado com sucesso :D");
        }
        catch(err){
            return toast.success("Não foi possível finalizar a compra :(");
        }
    }
   
    return (
        <Container>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Quantidade</Th>
                        <Th>Nome</Th>                        
                        <Th>Preço</Th>                        
                        <Th>Remover</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {products.map(prod => (
                        <Tr key={prod.id}>
                            <Td>             
                                <Update onClick={() => incrementProduct(prod.qtd, prod.id)}>+</Update>                                                                          
                                <Amount 
                                    name='quantidade'
                                    type='text'
                                    placeholder='0'
                                    value={prod.qtd}
                                    disabled
                                    onChange={event => setQtd(event.target.value)}/>   
                                    
                                <Update  onClick={() => decrementProduct(prod.qtd, prod.id)}>-</Update>                                                                        
                            </Td>                           
                            <Td>{prod.nome}</Td>                            
                            <Td>{(prod.preco * prod.qtd).toFixed(2)}</Td>                            
                            <Td>
                                <Icon src={Remove} onClick={() => removeProduct(prod.id)}/>
                                                         
                            </Td>
                        </Tr>
                        
                    ))}                    
                </Tbody>
            </Table>           
                <Checkout onClick={checkout}>Finalizar</Checkout>
            <ToastContainer/>
        </Container>
    )
}
