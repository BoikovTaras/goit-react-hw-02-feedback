import React from 'react';
import s from './Feedback.module.css';

const Feedback = ({ state, feedback }) => (
  <div className="">
    <ul className="">
      <li className="">
        <button className={s.good} name="good" onClick={feedback}>
          Good
        </button>
      </li>
      <li className="">
        <button className={s.neutral} name="neutral" onClick={feedback}>
          Neutral
        </button>
      </li>
      <li className="">
        <button className={s.bad} name="bad" onClick={feedback}>
          Bad
        </button>
      </li>
    </ul>
  </div>
);

export default Feedback;
