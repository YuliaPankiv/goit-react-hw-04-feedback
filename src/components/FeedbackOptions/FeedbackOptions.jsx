import PropTypes from 'prop-types'
import { Btn } from "./FeedbackOptions.styled";


export const FeedbackOptions = ({options, onLeaveFeedback}) => {

const btnListOptions=Object.keys(options);
  return (
  <>
    { btnListOptions.map((key) => (<Btn key={key}name={key} onClick={onLeaveFeedback} >{key}</Btn>)) }
    </>
)
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};