import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import apinode from '../../services/apinode'

import { ToastContainer, toast } from 'react-toastify'

import Image from '../../images/Logo-access.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Label from '../../components/Label/Label'

import { Container, Form, Logo, Register } from './Styles'

export default function Access({ history }) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    async function login(event){
        event.preventDefault()

        try{
            const response = await apinode.post('/session', { email, password })
            const { token } = response.data

            localStorage.setItem('token', token)
            history.push('/Categorias')
        }
        catch(err){
            return toast.error('Email ou senha inválidos')
        }
        finally{
            setEmail('')
            setPassword('')
        }
    }

    return (
        <Container>           
            <Logo src={Image}/>
            <Form onSubmit={login}>                
                <Label value='E-MAIL *'/>
                <Input
                    name='email'
                    type='email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder='teste@exemplo.com'/>

                <Label value='SENHA *'/>
                <Input
                    name='password'
                    type='password'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder='****************'/>

                <Link to='/Cadastrar'>
                    <Register>Registrar-se</Register>
                </Link>

                <Button value='Acessar'/>
                <ToastContainer/>
            </Form>
        </Container>
    )
}
