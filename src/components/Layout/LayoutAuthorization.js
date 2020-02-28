import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Styles'

import Menu from '../Menu/Menu'

export default function LayoutAuthorization({ children }){
    return(
        <Wrapper>
            <Menu/>
            {children}
        </Wrapper>
    )
}

LayoutAuthorization.prototype = {
    children: PropTypes.element.isRequired
}