import PropTypes from 'prop-types'

import { Statistic } from './Statistic.styled';

export const Statistics = ({good, neutral, bad, positivePercentage, total }) =>  (
    <Statistic>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>  
    <p>bad: {bad}</p>
    <p>total: {total()}</p>
    <p>PositiveFeedback: {positivePercentage()}%</p>
 </Statistic>
);

Statistic.propTypes={
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    positivePercentage: PropTypes.func.isRequired,
    total: PropTypes.func.isRequired,
}
