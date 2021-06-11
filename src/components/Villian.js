import React from 'react'

const Villian = ({ name }) => {
    if(name==='Batman')
        throw new Error('The Dark Knight')
    return (
        <h1>
            {name}
        </h1>
    )
}

export default Villian
