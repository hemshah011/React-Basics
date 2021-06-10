import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello there!"
        }
        //this.handleclick=this.handleclick.bind(this)
    }


    handleclick = () => {
        this.setState({
            message: "Your boy Hem here!"
        })
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button className="btn" onClick={this.handleclick}>Click pls</button>
            </div>
        )
    }
}

export default EventBind
