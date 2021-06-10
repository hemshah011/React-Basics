import React, { Component } from 'react'

class ClassEvent extends Component {
    handleclick() {
        console.log("Clicked from class");
    }
    render() {
        return (
            <div>
                <button className="btn" onClick={this.handleclick}>
                    Click Me!
                </button>
            </div>
        )
    }
}

export default ClassEvent
