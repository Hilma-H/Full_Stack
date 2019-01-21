import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [ counter1, setCounter1 ] = useState(0)
    const [ counter2, setCounter2 ] = useState(0)
    const [ counter3, setCounter3 ] = useState(0)
    const course = 'Anna palautetta:'
    const part1 = 'Hyvä'
    const part2 = 'Neutraali'
    const part3 = 'Huono'
    
    return (
      <div>
        <h1>{course}</h1>
        <button onClick={() => setCounter1(counter1 + 1)}>Hyvä</button>
        <button onClick={() => setCounter2(counter2 + 1)}>Neutraali</button>
        <button onClick={() => setCounter3(counter3 + 1)}>Huono</button>
        <h1>Statistiikka:</h1>
        <p>
          {part1} {counter1}
        </p>
        <p>
          {part2} {counter2}
        </p>
        <p>
          {part3} {counter3}
        </p>
      </div>
    )
  
}
  let counter = 1

  ReactDOM.render(
    <App counter={counter} />, 
    document.getElementById('root')
  )