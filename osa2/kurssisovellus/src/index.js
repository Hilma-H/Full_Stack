import React from "react";
import ReactDOM from "react-dom";
// Kopioitu pohja mallivastauksista

const Header = props => <h1>{props.course}</h1>;

const Total = props => {
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;

  return <p>yhteensä {total} tehtävää</p>;
};

const Part = props => {
  console.log("propsin arvo on", props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = props => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};
const Course = props => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
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
      {/* <Header course={course.name} /> 
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
