import React , { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [ persons, setPersons] = useState([
      { name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const handleChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
      }
    const addName = (event) => {
        event.preventDefault()
        const nameObject = {name: newName}
        setPersons(persons.concat(nameObject))
        setNewName('')
        console.log('nappia painettu', event.target)
      }
    
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={addName}>
          <div>
            nimi: <input value={newName}
            onChange={handleChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
        {persons.map(x => <li>{x.name}</li>)}
      </div>
      </div>
    )
  
  }

ReactDOM.render(<App />, document.getElementById('root'));

