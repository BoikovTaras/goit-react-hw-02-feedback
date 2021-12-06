import Form from './components/Form/Form';

import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <>
        <Form good={good} neutral={neutral} bad={bad} />
      </>
    );
  }
}

export default App;
