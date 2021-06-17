import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CreatePoll = (props) => {
  const { publishVoteOptionChange, publishVoteSubjectChange } = props;

  const [subjectText, setVotingSubject] = useState('');
  const [inputList, setInputList] = useState([{ optionText: '' }]);

  // handle vote subject input change
  const handleSubjectChange = (e) => {
    setVotingSubject(e.target.value);
  };

  // handle vote option input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { optionText: '' }]);
  };

  // propagate inputList changes to parent component
  useEffect(() => {
    if (inputList) {
      // fetch auto suggest options from backend,
      publishVoteOptionChange(inputList);
    }
  }, [inputList]);

  // propagate subjectText changes to parent component
  useEffect(() => {
    if (subjectText) {
      // fetch auto suggest options from backend,
      publishVoteSubjectChange(subjectText);
    }
  }, [subjectText]);

  const handleResetClick = () => {
    setVotingSubject('');
    setInputList([{ optionText: '' }]);
  };

  return (
    <div className="create-poll">
      <div className="poll-subject">
        <input
          name="subjectText"
          id="subjectText"
          placeholder="Enter vote subject"
          value={subjectText}
          onChange={(e) => handleSubjectChange(e)}
          maxLength="80"
        />
      </div>
      <div className="poll-options">
        {inputList.map((x, i) => {
          return (
            <div className="box" key={`voteOption${i}`}>
              <input
                name="optionText"
                id="optionText"
                placeholder="Enter vote option"
                value={x.optionText}
                onChange={(e) => handleInputChange(e, i)}
                maxLength="80"
              />
              <div className="button-box">
                {inputList.length !== 1 && (
                  <button className="button-remove" onClick={() => handleRemoveClick(i)}>
                    X
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button onClick={handleAddClick}>Add</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom-button">
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
};

CreatePoll.propTypes = {
  publishVoteOptionChange: PropTypes.func.isRequired,
  publishVoteSubjectChange: PropTypes.func.isRequired,
};

CreatePoll.defaultProps = {
};

export default CreatePoll;
