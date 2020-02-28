import React, { Component } from 'react'

import { ComponentLabel } from './Styles'

export default class Label extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ComponentLabel>{this.props.value}</ComponentLabel>
        )
    }
}