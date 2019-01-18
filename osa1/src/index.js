import React from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
    {
      name: 'Reactin perusteet:',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla:',
      exercises: 7
    },
    {
      name: 'Komponenttien tila:',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
      
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Yhteensä: {props.parts[0].exercises 
        + props.parts[1].exercises
        + props.parts[2].exercises} tehtävää </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part one={props.parts[0].name} two={props.parts[0].exercises}/>
      <Part one={props.parts[1].name} two={props.parts[1].exercises}/>
      <Part one={props.parts[2].name} two={props.parts[1].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.one} {props.two}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
