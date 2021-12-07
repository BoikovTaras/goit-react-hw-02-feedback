import React from 'react';
import s from './Form.module.css';

const Feedback = ({ good, neutral, bad }) => (
  <div className="">
    <h2 className="">Please leave feedback</h2>
    <ul className="">
      <li className="">
        <button className={s.good} name="good" onClick={good}>
          Good
        </button>
      </li>
      <li className="">
        <button className={s.neutral} name="neutral" onClick={neutral}>
          Neutral
        </button>
      </li>
      <li className="">
        <button className={s.bad} name="bad" onClick={bad}>
          Bad
        </button>
      </li>
    </ul>
  </div>
);

export default Feedback;
