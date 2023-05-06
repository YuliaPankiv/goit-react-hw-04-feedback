import PropTypes from 'prop-types';
import { Statistic } from './Statistic.styled';

const Statistics = ({ good, neutral, bad, positivePercentage, total }) => (
  <Statistic>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>total: {total()}</p>
    <p>PositiveFeedback: {positivePercentage()}%</p>
  </Statistic>
);

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.func,
  total: PropTypes.func,
};

export default Statistics;
