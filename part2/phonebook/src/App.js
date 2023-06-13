import { useState } from "react";

const App=()=> {
  const [persons,setPersons]=useState([ { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]);
  const [filterName,setFilterName]=useState("");
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

  const filterHandler=(event)=>{
    setFilterName(event.target.value);
  }



  return (
    <div>

      <h2>Phonebook</h2>
      filter show with <input vlaue={filterName} onChange={filterHandler}/>      <h2>Phonebook</h2>
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
        persons.filter(person=>person.name.toLowerCase().includes(filterName.toLowerCase())).map((item)=>
          <div key={item.name}>{item.name} {item.number}</div>)

      }

    </div>
  );
}

export default App;
