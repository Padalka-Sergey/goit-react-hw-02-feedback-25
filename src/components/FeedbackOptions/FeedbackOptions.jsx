import './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className="btn"
      key={option}
      type="button"
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};
