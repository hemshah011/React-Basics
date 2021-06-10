import React, { Component } from 'react'

class DemoForms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment:'',
            language:'react'
        }
    }

    handleUserChange = e =>     {
        //console.log(e.target.value);
        this.setState({
            username: e.target.value
        })
    }
    handleCommentChange=e=>{
        this.setState({
            comment: e.target.value
        })
    }
    handleLanguageChange=e=>{
        this.setState({
            language: e.target.value
        })
    }
    handleSubmit=e=>{
        console.log('Handeled!')
        console.log(`Username:${this.state.username} `)
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text " id="username" value={this.state.username} onChange={this.handleUserChange}></input>
                </div>
                <div>
                    <label htmlFor="username">Description</label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label htmlFor="language">Language</label>
                    <select id="Language" value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="react">React</option>
                        <option value="swift">Swift</option>
                        <option value="python">Python</option>
                        <option value="vanillajs">Vanilla JS</option>
                    </select>
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForms
