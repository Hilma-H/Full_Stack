import React from 'react'
const Header = props => <h1>{props.course}</h1>;

const Total = props => {
  function summa(sum, exer) {
    return sum + exer.exercises;
  }
  const total = props.parts.reduce(summa, 0);
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
  
  const Content = props => {
    const list = () => props.parts.map(x => <Part key={x.id} part={x} />);
  
    return (
      <div>
        <ul>{list()}</ul>
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

export default Course