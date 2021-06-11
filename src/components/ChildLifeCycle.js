import React, { Component } from 'react'

export class ChildLifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"ChildLifeCycle"
        }
        console.log('ChildLifeCycle Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('ChildLifeCycle  getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('ChildLifeCycle componentDidMount')
    }

    render() {
        console.log('ChildLifeCycle Render')
        return (
            <h1>
                ChildLifeCycle
            </h1>
        )
    }
}

export default ChildLifeCycle
