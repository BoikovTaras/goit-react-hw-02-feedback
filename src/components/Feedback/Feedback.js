import React from 'react';
import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({ option, onIncrement }) => (
  <div>
    <ul>
      {option.map(option => (
        <button
          className={s.button}
          name={option}
          key={option}
          onClick={() => onIncrement(option)}
        >
          {option.replace(option[0], option[0].toUpperCase())}
        </button>
      ))}
    </ul>
  </div>
);

Feedback.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onIncrement: PropTypes.func.isRequired,
};

export default Feedback;
