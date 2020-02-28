import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Styles'

export default function LayoutDefault({ children }){
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}

LayoutDefault.prototype = {
    children: PropTypes.element.isRequired
}