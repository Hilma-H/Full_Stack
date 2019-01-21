import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [ good, setGood] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad] = useState(0)
    const course = 'Anna palautetta:'
    const part1 = 'Hyvä'
    const part2 = 'Neutraali'
    const part3 = 'Huono'
    
    return (
      <div>
        <h1>{course}</h1>
        <button onClick={() => setGood(good + 1)}>Hyvä</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutraali</button>
        <button onClick={() => setBad(bad + 1)}>Huono</button>
        <h1>Statistiikka:</h1>
        <p>{part1} {good}</p>
        <p>{part2} {neutral}</p>
        <p>{part3} {bad}</p>
        <p>Yhteensä: {good+neutral+bad}</p>
        <p>Keskiarvo: {(good-bad)/(good+neutral+bad)}</p>
        <p>Positiivisia: {good/(good+neutral+bad)*100} %</p>
      </div>
    )
  
}
  let counter = 1

  ReactDOM.render(
    <App counter={counter} />, 
    document.getElementById('root')
  )