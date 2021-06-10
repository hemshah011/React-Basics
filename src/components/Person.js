import React from 'react'

const Person = ({ person }) => {
    return (
        <>
            <h1>{person.name}</h1>
            <h1>{person.id}</h1>
        </>
    )
}

export default Person
