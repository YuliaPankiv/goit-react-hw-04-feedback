import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const opt = Object.keys(options);
  return (
    <>
      {opt.map((name, index) => {
        // console.log(name, index);
        return (
          <Btn
            key={index}
            name={name}
            value={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </Btn>
        );
      })}
    </>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default FeedbackOptions;
