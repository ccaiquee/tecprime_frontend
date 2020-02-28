import React, { useState } from 'react'

import apinode from '../../services/apinode'

import { ToastContainer, toast } from 'react-toastify'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Label from '../../components/Label/Label'

import { Container, Form } from './Styles'

export default function Register({ history }) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ checkpassword, setCheckpassword ] = useState('')

    async function registerUser(event){
        event.preventDefault()
        try{
            if(password === checkpassword){
                const response = apinode.post('/account', { email, password })
                history.push('/')
                return toast.success('Cadastro realizado com sucesso')
            }
            else{
                return toast.error('As senhas não conferem')
            }            
        }
        catch(err){
            return toast.error('Não foi possível cadastrar')
        }
        finally{
            setEmail('')
            setPassword('')
            setCheckpassword('')
        }
    }

    return (
        <Container>
            <Form onSubmit={registerUser}>
                <Label value='EMAIL *'/>
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

                <Label value='CONFIRMAR SENHA *'/>
                <Input 
                    name='checkpassword'
                    type='password'
                    value={checkpassword}
                    onChange={event => setCheckpassword(event.target.value)}
                    placeholder='****************'/>

                <Button value='Cadastrar'/>
                <ToastContainer/>
            </Form>
        </Container>
    )
}
