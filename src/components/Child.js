import React, { Component } from 'react'
import {UserConsumer} from './UserContext'

class Child extends Component {
    render() {
        return (
            <UserConsumer>
                {               //jsx
                    name => {
                        return (
                            <>
                                <h1>Hello {name}</h1>
                            </>
                        )
                    }

                }
            </UserConsumer>
        )
    }
}

export default Child
