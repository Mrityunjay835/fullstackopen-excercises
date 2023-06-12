import { useState } from "react";

const App=()=> {
  const [persons,setPersons]=useState([{ name:'Arto Hellas',number: "123-34-32435325" }]);
  const [personName,setPersonName] = useState("fds");
  const [number,setNumber] = useState("");

  const addPerson=(event)=>{
    event.preventDefault();
    console.log("working form");
    persons.find(item=>item.name===personName)?alert(`${personName} is already added to phonebook`):setPersons(persons.concat({name: personName,
    number:number}));
  }

  const nameHandler=(event)=>{
    console.log(event.target.value);
    setPersonName(event.target.value);
  }

  const numberHandler=(event)=>{
    console.log(event.target.value);
    setNumber(event.target.value);
  }



  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {
        persons.map((item,index)=>
          <div key={index}>{item.name} {item.number}</div>)

      }

    </div>
  );
}

export default App;
