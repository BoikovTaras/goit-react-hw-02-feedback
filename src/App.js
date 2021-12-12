import s from './components/Feedback/Feedback.module.css';
import Statistic from './components/Statistic/Statistic';
import Feedback from './components/Feedback/Feedback';
import Section from './components/Section/Section';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Feedback = event => {
    const btn = event.target.name;

    this.setState(prevState => ({
      [btn]: (prevState[btn] += 1),
    }));
  };

  GetTotafFeedback = () => {
    const totalFeedback = Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0,
    );
    return totalFeedback;
  };

  PositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good * 100) / this.GetTotafFeedback(),
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
        <Feedback state={this.state} feedback={this.Feedback} />
        <Section title="Statistics" />
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.GetTotafFeedback}
          percent={this.PositiveFeedbackPercentage}
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
