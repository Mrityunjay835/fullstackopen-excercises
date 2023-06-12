import { useState } from "react";

const App=()=> {
  const [persons,setPersons]=useState([{ name:'Arto Hellas'}]);
  const [personName,setPersonName] = useState("fds");

  const addPerson=(event)=>{
    event.preventDefault();
    console.log("working form");
    persons.find(item=>item.name===personName)?alert(`${personName} is already added to phonebook`):setPersons(persons.concat({name: personName}));
  }

  const nameHandler=(event)=>{
    console.log(event.target.value);
    setPersonName(event.target.value);
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name : <input value={personName} onChange={nameHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      {
        persons.map((item,index)=>
          <div key={index}>{item.name}</div>)

      }

    </div>
  );
}

export default App;
