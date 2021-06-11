import React, { Component } from 'react'
import ChildLifeCycle from './ChildLifeCycle';

export class ParentLifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "ParentLifeCycle"
        }
        console.log('ParentLifeCycle Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ParentLifeCycle  getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate() {
        console.log("ParentLifeCycle shouldComponentUpdate")
    }

    componentDidMount() {
        console.log('ParentLifeCycle componentDidMount')
    }

    render() {
        console.log('ParentLifeCycle Render')
        return (
            <>
                <h1>
                    ParentLifeCycle
            </h1>
                <ChildLifeCycle />
            </>
        )
    }
}

export default ParentLifeCycle
