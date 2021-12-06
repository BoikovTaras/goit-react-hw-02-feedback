import React from 'react';

const Statistic = ({ good, neutral, bad }) => (
  <div className="">
    <h2 className="">Statistics</h2>
    <ul className="">
      <li className="">Good: {good}</li>
      <li className="">Neutral: {neutral}</li>
      <li className="">Bad: {bad}</li>
    </ul>
  </div>
);

export default Statistic;
