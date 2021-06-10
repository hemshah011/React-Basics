import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return this.state.isLoggedIn&&<h1>Welcome Hem</h1>
        //return this.state.isLoggenIn?<h1>Welcome Hem</h1>:<h1>Welcome Guest</h1>
        // let message;
        // if (this.state.isLoggenIn)
        //     message = <h1>Welcome Hem</h1>
        // else
        //     message=<h1>Welcome Guest</h1>
        // return <>{message}</>
    }
}

export default UserGreeting
