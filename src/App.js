import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './components/Feedback/Feedback.module.css';

import Statistic from './components/Statistic/Statistic';
import Feedback from './components/Feedback/Feedback';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementHandler = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  getTotafFeedback = () => {
    const totalFeedback = Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0,
    );
    return totalFeedback;
  };

  positiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good * 100) / this.getTotafFeedback(),
    );
    return percent;
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <div className={s.container}>
        <Section title="Please leave feedback" />
        <Feedback
          option={['good', 'neutral', 'bad']}
          onIncrement={this.incrementHandler}
        />
        <Section title="Statistics" />
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.getTotafFeedback}
          percent={this.positiveFeedbackPercentage}
        />
      </div>
    );
  }
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
