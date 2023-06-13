import React from 'react'

const Filter = ({filterName ,filterHandler}) => {
    
    return (
        <div>
            <h2>Phonebook</h2>
            filter show with <input vlaue={filterName} onChange={filterHandler} />
        </div>
    )
}

export default Filter