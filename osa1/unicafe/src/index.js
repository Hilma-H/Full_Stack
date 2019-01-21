import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    if (props.allClicks.length === 0) {
        return (
          <div>
            Ei yhtään annettua palautetta
          </div>
        )
      }
    return (
        <div>
        <h1>Statistiikka:</h1>
        <p>{props.stats.part1} {props.good}</p>
        <p>{props.stats.part2} {props.neutral}</p>
        <p>{props.stats.part3} {props.bad}</p>
        <p>Yhteensä: {props.good+props.neutral+props.bad}</p>
        <p>Keskiarvo: {(props.good-props.bad)/(props.good+props.neutral+props.bad)}</p>
        <p>Positiivisia: {props.good/(props.good+props.neutral+props.bad)*100} %</p>
        </div>
    )
    
    
  }

const App = (props) => {
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)
    const [allClicks, setAll] = useState([])
    const header = 'Anna palautetta:'
    const stats = {
        part1: 'Hyvä',
        part2: 'Neutraali',
        part3: 'Huono'
    }
    const goodClick = () => {
        setAll(allClicks.concat('C'))
        setGood(good + 1)
      }
      const neutralClick = () => {
        setAll(allClicks.concat('C'))
        setNeutral(neutral + 1)
      }
      const badClick = () => {
        setAll(allClicks.concat('C'))
        setBad(bad + 1)
      }
    return (
      <div>
        <h1>{header}</h1>
        <button onClick={goodClick}>Hyvä</button>
        <button onClick={neutralClick}>Neutraali</button>
        <button onClick={badClick}>Huono</button>
        <Statistics stats={stats} 
        good={good} neutral={neutral} bad={bad}
        allClicks={allClicks}/>
      </div>
    )

  }
  let counter = 1

  ReactDOM.render(
    <App counter={counter} />, 
    document.getElementById('root')
  )