import React from 'react';
import s from './Form.module.css';

const Feedback = ({ good, neutral, bad }) => (
  <div className="">
    <h2 className="">Please leave feedback</h2>
    <ul className="">
      <li className="">
        <button className={s.good} onClick={good}>
          Good
        </button>
      </li>
      <li className="">
        <button className={s.neutral} onClick={neutral}>
          Neutral
        </button>
      </li>
      <li className="">
        <button className={s.bad} onClick={bad}>
          Bad
        </button>
      </li>
    </ul>
  </div>
);

export default Feedback;
