import React from 'react';
import s from './Form.module.css';
import Statistic from './Statistic';
import Feedback from './Feedback';

class Form extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    this.satState(prevState => ({
      total: prevState.bad + prevState.neutral + prevState.good,
    }));
  };

  render() {
    return (
      <div className={s.form}>
        <Feedback
          good={this.goodFeedback}
          neutral={this.neutralFeedback}
          bad={this.badFeedback}
        />
        <Statistic state={this.state} />
      </div>
    );
  }
}

export default Form;
