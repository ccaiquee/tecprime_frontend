import React, { Component } from 'react'

import { ComponentInput } from './Styles'

export default class Input extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ComponentInput
                name={this.props.name}
                type={this.props.type}
                value={this.props.value}
                onChange={this.props.onChange}
                placeholder={this.props.placeholder}/>
        )
    }
}