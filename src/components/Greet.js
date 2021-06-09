import React from 'react'
const Greet = (props) => {
    console.log(props.name);
    return (
        <>
            <h1>
                Hello {props.name} !
            </h1>
            <p>
                Hello {props.children} !
            </p>
        </>
    )
}
export default Greet;