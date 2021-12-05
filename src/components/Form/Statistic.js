import React from 'react';

const Statistic = ({ state }) => (
  <div className="">
    <h2 className="">Statistics</h2>
    <ul className="">
      <li className="">Good: {state.good}</li>
      <li className="">Neutral: {state.neutral}</li>
      <li className="">Bad: {state.bad}</li>
      <li>Total: {state.total}</li>
    </ul>
  </div>
);

export default Statistic;
