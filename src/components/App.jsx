import Statistics from 'components/Statistic';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';
import { useState, useEffect } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevGood => {
          return prevGood + 1;
        });
        break;
      case 'bad':
        setBad(prevBad => {
          return prevBad + 1;
        });
        break;
      case 'neutral':
        setNeutral(prevNeutral => {
          return prevNeutral + 1;
        });
        break;
      default:
        return;
    }
  };
  const btnListOptions = { good, neutral, bad };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={btnListOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Container>
  );
};
export default App;

