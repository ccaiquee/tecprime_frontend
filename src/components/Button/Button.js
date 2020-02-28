import React, { Component } from 'react'

import { ComponentButton } from './Styles'

export default class Button extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ComponentButton>
                {this.props.value}
            </ComponentButton>
        )
    }
}