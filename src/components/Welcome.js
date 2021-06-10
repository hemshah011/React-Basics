//Stateful class components
import React, { Component } from 'react'
class Welcome extends Component {
    render() {
        const {name,children}=this.props;
        return (
            <>
            <h1>
                {name}
            </h1>
            <p>
                {children}
            </p>
            </>
        )
    }
}

export default Welcome
