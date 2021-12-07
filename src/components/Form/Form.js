import React, { Component } from 'react';
import s from './Form.module.css';
import Statistic from './Statistic';
import Feedback from './Feedback';

class Form extends Component {
  render() {
    return (
      <div className={s.form}>
        <Feedback
          good={Feedback}
          neutral={this.neutralFeedback}
          bad={this.badFeedback}
        />
        <Statistic state={this.state} />
      </div>
    );
  }
}

export default Form;
