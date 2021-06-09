import React from 'react'

const Hello= ()=>{
    return(
        <div>
            <h1>Hello Again with JSX</h1>
        </div>
    )
    //Without JSX now
    // return React.createElement(
    //     'div',
    //     {id:'container'}, //null parameter is the key value pair, which specifies the id or the class attached to the element.
    //     React.createElement('h1',{className:'bolder'},'Hello again without JSX')
    // )
}

export default Hello;