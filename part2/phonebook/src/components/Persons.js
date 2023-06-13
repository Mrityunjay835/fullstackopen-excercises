import React from 'react'

const Persons = ({persons,filterName}) => {
    return (
        <div>
            <h2>Numbers</h2>
            {
                persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase())).map((item) =>
                    <div key={item.name}>{item.name} {item.number}</div>)

            }
        </div>
    )
}

export default Persons