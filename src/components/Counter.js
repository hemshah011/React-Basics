import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);  //necessary
        this.state = {
            count: 0
        }
        //this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState((prevState)=>({ count: prevState.count + 1 }),()=>console.log(this.state.count));
    }
    incrementby5() {
        //this.setState({ count: this.state.count + 1 },()=>console.log(this.state.count))
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <h1>Count = {this.state.count}</h1>
                <button class="btn" onClick={()=>this.incrementby5()} >Increment</button>
            </div >
        )
    }
}
export default Counter