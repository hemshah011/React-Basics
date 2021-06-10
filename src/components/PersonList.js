import React from 'react'
import Person from './Person'
const PersonList = () => {
    const names = ['Hem', 'Prem', 'Name'];
    const objs = [{
        id: 1,
        name: names[0],
    },
    {
        id: 2,
        name: names[1],
    },
    {
        id: 3,
        name: names[2],
    }]
    return objs.map(obj => <Person key={obj.id} person={obj} />)
}

export default PersonList
