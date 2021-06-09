//Stateful class components
import React, { Component } from 'react'
class Welcome extends Component {
    render() {
        return (
            <>
            <h1>
                {this.props.name}
            </h1>
            <p>
                {this.props.children}
            </p>
            </>
        )
    }
}

export default Welcome
