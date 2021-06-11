import React, { Component } from 'react'
// import RegularComp from './RegularComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'
class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Hem'
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Hem'
            })
        },2000)
    }

    render() {
        console.log('****************************')
        console.log('Parent Component Render')
        return (
            
            <h1>
                Parent Component
                <MemoComp name={this.state.name}/>
                {/* <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </h1>
           
        
        )
    }
}

export default ParentComp
