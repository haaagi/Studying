import React, { Component } from 'react';

class MyName extends Component {
    render(){
        return (
            <div>
                <h1>Hi My name is <b>{this.props.name}</b></h1>
            </div>
        )
    }
}

export default MyName;