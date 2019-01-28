import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = props => {
  if (props.allClicks.length === 0) {
    return <div>Ei yhtään annettua palautetta</div>;
  }
  return (
    <div>
      <h1>Statistiikka:</h1>
      <StatisticItem name="Hyvä: " value={props.good} />
      <StatisticItem name="Neutraali: " value={props.neutral} />
      <StatisticItem name="Huono: " value={props.bad} />
      <StatisticItem
        name="Yhteensä: "
        value={props.good + props.neutral + props.bad}
      />
      <StatisticItem
        name="Keskiarvo: "
        value={
          (props.good - props.bad) / (props.good + props.neutral + props.bad)
        }
      />
      <StatisticItem
        name="Positiivisia: "
        value={
          (props.good / (props.good + props.neutral + props.bad)) * 100 + "%"
        }
      />
    </div>
  );
};

const StatisticItem = props => {
  return (
    <div>
      <p>
        {props.name}
        {props.value}
      </p>
    </div>
  );
};

const Button = props => <button onClick={props.hClick}>{props.text}</button>;

const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);
  const header = "Anna palautetta:";
  const goodClick = () => {
    setAll(allClicks.concat("C"));
    setGood(good + 1);
  };
  const neutralClick = () => {
    setAll(allClicks.concat("C"));
    setNeutral(neutral + 1);
  };
  const badClick = () => {
    setAll(allClicks.concat("C"));
    setBad(bad + 1);
  };
  return (
    <div>
      <h1>{header}</h1>
      <Button hClick={goodClick} text="Hyvä" />
      <Button hClick={neutralClick} text="Neutraali" />
      <Button hClick={badClick} text="Huono" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
      />
    </div>
  );
};
let counter = 1;

ReactDOM.render(<App counter={counter} />, document.getElementById("root"));
