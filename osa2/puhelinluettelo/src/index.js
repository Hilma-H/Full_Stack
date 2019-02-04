import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123-1234567" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };
  const addName = event => {
    event.preventDefault();
    const nameObject = { name: newName, number: newNumber };
    if (persons.find(x => x.name === newName)) {
      window.alert(`${newName} on jo luettelossa`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewNumber("");
      setNewName("");
      console.log("nappia painettu", event.target);
    }
  };
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then(response => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <PersonForm add={addName} 
        name={newName} change={handleNameChange}
        number={newNumber} change2={handleNumberChange}/>
      <h2>Numerot</h2>
      <List list={persons}/>
    </div>
  );
};
const List = props => (
  <div>
    {props.list.map(x => (
      <li key={x.name}>
        {x.name} {x.number}
      </li>
    ))}
  </div>
)
const PersonForm = props => (
  <form onSubmit={props.add}>
    <div>
      Nimi: <input value={props.name} onChange={props.change} />
    </div>
    <div>
      Numero: <input value={props.number} onChange={props.change2} />
    </div>
    <Button text="lisää"/>
  </form>
);

const Button = (props) => (
  <button type="submit">
    {props.text}
  </button>
)

ReactDOM.render(<App />, document.getElementById("root"));
