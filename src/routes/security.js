import React, { useState } from 'react'

import LayoutDefault from '../components/Layout/LayoutDefault'
import LayoutAuthorization from '../components/Layout/LayoutAuthorization'

import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function RouteWrapper({ 
    component: Component,
    isPrivate,
    ...rest
 }) { 

    const token = localStorage.getItem('token')

    var signed = false
    
    if(token){
        signed = true
    }
   
    //const authorization = localStorage.getItem('token')

    /*if(!authorization) {
        return signed = true
    }*/
   
    if(!signed && isPrivate){
        return <Redirect to='/'/>
    }

    if(signed && !isPrivate){
        return <Redirect to='/Categorias'/>
    }

    const Layout = signed ? LayoutAuthorization :  LayoutDefault

    return <Route {...rest} render={props => (
        <Layout>
            <Component {...props}/>
        </Layout>
    )}/>
 }

 RouteWrapper.prototype = { 
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
 }

RouteWrapper.defaultProp = {
    isPrivate: false
 }