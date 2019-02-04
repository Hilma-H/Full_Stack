import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "123-1234567"}]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }
  const addName = event => {
    event.preventDefault();
    const nameObject = { name: newName, number: newNumber};
    if (persons.find(x => x.name === newName)){
      window.alert(`${newName} on jo luettelossa`);
    } else {
    setPersons(persons.concat(nameObject));
    setNewNumber("");
    setNewName("");
    console.log("nappia painettu", event.target);
    }
  };

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addName}>
        <div>
          Nimi: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Numero: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <div>
        {persons.map(x => (
          <li key={x.name}>{x.name} {x.number}</li>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
