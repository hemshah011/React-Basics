import React from 'react'
const Greet = ({name,children}) => {
    //const {name,children}=props
    console.log({name});
    return (
        <>
            <h1>
                Hello {name} !
            </h1>
            <p>
                Hello {children} !
            </p>
        </>
    )
}
export default Greet;