import React from 'react';
import Notification from '../Notification/Notification';
import s from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, percent }) => {
  const totalFeedback = total();
  const goodPercent = percent();
  return (
    <div className={s.box}>
      {!!totalFeedback ? (
        <ul>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {totalFeedback}</li>
          <li className={s.item}>Positive Feedback: {goodPercent}%</li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistic;
