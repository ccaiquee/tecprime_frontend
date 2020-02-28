import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './security'

import Access from '../pages/Access/Access'
import Register from '../pages/Register/Register'
import Category from '../pages/Category/Category'
import Product from '../pages/Product/Product'
import Shopping from '../pages/Shopping/Shopping'

export default function Routes() {
    return (        
        <Switch>                
            <Route exact path='/' component={Access}/>
            <Route exact path='/Cadastrar' component={Register}/>
            <Route exact path='/Categorias' component={Category} isPrivate/>
            <Route exact path='/Categorias/Produtos/:id' component={Product} isPrivate/>
            <Route exact path='/Carrinho' component={Shopping} isPrivate/>
        </Switch>        
    )
}
