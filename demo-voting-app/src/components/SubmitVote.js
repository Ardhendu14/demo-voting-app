import React from 'react';
import PropTypes from 'prop-types';

const SubmitVote = (props) => {
  const { titleText, displayOptions } = props;
  return (
    <div className="submit-vote">
      <h2>{titleText}</h2>
      <div className="voting-options">
        {displayOptions &&
          displayOptions.map((opt, i) => {
            return (
              <div className="box-submit-vote" key={`voteOption${i}`}>
                {opt.optionText && <input
                  type="radio"
                  className=""
                  name="voteOption"
                  id={`radioVoteOption${i}`}
                />}
                <p>{opt.optionText}</p>
              </div>
            );
          })}
      </div>
      <div className="bottom-button">
        <button>Vote</button>
      </div>
    </div>
  );
};

SubmitVote.propTypes = {
  titleText: PropTypes.string,
  displayOptions: PropTypes.arrayOf(PropTypes.shape({})),
};

SubmitVote.defaultProps = {
  titleText: '',
  displayOptions: [{}],
};

export default SubmitVote;
