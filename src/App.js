import Form from './components/Form/Form';

import React, { Component } from 'react';

class App extends Component {
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

  Feedback = event => {
    console.log(event.target.textContent);
    // this.setState(prevState => ({

    //   // [this.currentTarget.name]: prevState.[this.currentTarget.name] + 1,
    // }));
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <>
        <Form
          good={good}
          neutral={neutral}
          bad={bad}
          Feedback={this.Feedback}
        />
      </>
    );
  }
}

export default App;
