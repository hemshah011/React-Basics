import React from 'react'

const ChildComponent = (props) => {
    return (
        <div>
            <button className="btn" onClick={()=>props.greetHandler('Your boy')}>Show Parent</button>
        </div>
    )
}

export default ChildComponent
