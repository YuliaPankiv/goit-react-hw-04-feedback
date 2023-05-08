import React, { Component } from 'react';

import Statistics from 'components/Statistic';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  onLeaveFeedback = e =>
    this.setState(prev => ({ [e.target.name]: prev[e.target.name] + 1 }));

  render() {
    const { good, neutral, bad } = this.state;
    const btnListOptions = Object.keys(this.state);
    console.log(btnListOptions);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnListOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Container>
    );
  }
}
export default App;
