import React from "react";
import ReactDOM from "react-dom";
// Kopioitu pohja mallivastauksista

const Header = props => <h1>{props.course}</h1>;

const Total = props => {
  function summa(sum, exer) {
    return sum + exer.exercises;
  }
  const total = props.parts.reduce(summa,0)
  return <p>Yhteensä {total} tehtävää</p>;
};

//vaihtoehtona: part.map(p=>p.exer).reduce

const Part = props => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Courses = (parametrit) => {
    console.log('', parametrit)
    const list = () => parametrit.part.map(x =>
    <Part key={x.id} part = {x} />
    )
    
    return (
        <div>
           <ul>{list()}</ul> 
        </div>
    )
}

const Content = props => {
  return (
    <div>
      <Courses part={props.parts} />
    </div>
  );
};

const Course = props => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack -sovelluskehitys",
    parts: [
      {
        name: "Reactin perusteet",
        exercises: 10,
        id: 1
      },
      {
        name: "Tiedonvälitys propseilla",
        exercises: 7,
        id: 2
      },
      {
        name: "Komponenttien tila",
        exercises: 14,
        id: 3
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
