import React, {Component} from 'react'

import {Statistics} from './Statistic/Statistics';
import {Section} from './Section/Section';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Notification} from './Notification/Notification';
import { Container } from './App.styled';

class App extends Component {

  state = {
      good: 0,
      neutral: 0,
      bad: 0,
    
  };

  countTotalFeedback = () => {
      const {good, neutral, bad} = this.state;
      let count=good+bad+neutral;
      return count;
  };

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100);
    
  onLeaveFeedback = e => this.setState(prev => ({ [e.target.name]: prev[e.target.name] + 1}));
  
  render() {

    const {good, neutral, bad} = this.state;
      return (
      <Container>
        <Section title="Please leave feedback">
         <FeedbackOptions 
         options={this.state} 
         onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
       
        {this.countTotalFeedback() > 0 ? 
        <Section
         title="Statistics">
          <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={this.countTotalFeedback} 
            positivePercentage={this.countPositiveFeedbackPercentage} />
        </Section> :
        <Notification 
          message="There is no feedback">
        </Notification>}
        
      </Container>
      );
      }

}
export default App
