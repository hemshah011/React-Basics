import React, { Component } from 'react'
import WithCounter from './WithCounter';
class ClickCounter extends Component {
    render() {
        const { count,incrementCount,name} = this.props;
        return (
            <button onClick={incrementCount}>
                {name} Clicked {count} times
            </button>
        )
    }
}

export default WithCounter(ClickCounter)
