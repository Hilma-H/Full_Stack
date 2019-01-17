import React from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
      osa1={part1} exer1={exercises1}
      osa2={part2} exer2={exercises2}
      osa3={part3} exer3={exercises3}/>
      <Total yht={exercises1 + exercises2 + exercises3}/>
      
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>yhteensä {props.yht} tehtävää </p>
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
