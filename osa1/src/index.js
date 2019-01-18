import React from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = {
    name: 'Reactin perusteet:',
    exercises: 10
  }
  const part2 = {
    name: 'Tiedonvälitys propseilla:',
    exercises: 7
  }
  const part3 = {
    name: 'Komponenttien tila:',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
      osa1={part1.name} exer1={part1.exercises}
      osa2={part2.name} exer2={part2.exercises}
      osa3={part3.name} exer3={part3.exercises}/>
      <Total yht={part1.exercises + part2.exercises + part3.exercises}/>
      
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
      <p>Yhteensä: {props.yht} tehtävää </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part one={props.osa1} two={props.exer1}/>
      <Part one={props.osa2} two={props.exer2}/>
      <Part one={props.osa3} two={props.exer3}/>
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
