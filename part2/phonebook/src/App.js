import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]);

  const [filterName, setFilterName] = useState("");
  const filterHandler = (event) => {
    setFilterName(event.target.value);
}

  return (
    <div>

      <div>
        <Filter filterName={filterName} setFilterName={setFilterName} filterHandler={filterHandler}/>
      </div>


      <div>
        <PersonForm persons={persons} setPersons={setPersons} />
      </div>

     <div>
      <Persons persons={persons} filterName={filterName}/>
     </div>

    </div>
  );
}

export default App;
