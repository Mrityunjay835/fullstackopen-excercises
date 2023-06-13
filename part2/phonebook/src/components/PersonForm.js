import React, { useState } from 'react'

const PersonForm = ({persons,setPersons}) => {
    const [personName,setPersonName] = useState("fds");
    const [number,setNumber] = useState("");
    
      const nameHandler=(event)=>{
        console.log(event.target.value);
        setPersonName(event.target.value);
      }
    
      const numberHandler=(event)=>{
        console.log(event.target.value);
        setNumber(event.target.value);
      }

      const addPerson=(event)=>{
        event.preventDefault();
        console.log("working form");
        persons.find(item=>item.name===personName)?alert(`${personName} is already added to phonebook`):setPersons(persons.concat({name: personName,
        number:number}));
      }

  return (
    <>
     <h2>add a new</h2>
        <form onSubmit={addPerson}>
        <div>
          name : <input value={personName} onChange={nameHandler}/>
        </div>
        <div>
          number : <input value={number} onChange={numberHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
    </>
  )
}

export default PersonForm