import React, { Component } from 'react';
import '../assets/index.css';
import CreatePoll from './CreatePoll';
import SubmitVote from './SubmitVote';
import VoteChart from './VoteChart';

class VotingApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voteOptions: [{ optionText: '' }],
      voteSubject: '',
    };
  }

  // update state attribute voteOption based on CreatePoll
  publishVoteOptionChange = (voteOptions) => {
    this.setState({ voteOptions });
  };

  // update state attribute voteSubject based on CreatePoll
  publishVoteSubjectChange = (voteSubject) => {
    this.setState({ voteSubject });
  };

  render() {
    const { voteSubject, voteOptions } = this.state;
    return (
      <div>
        <h1>Demo Voting App</h1>
        <div className="voting-container">
          <div className="voting-sections">
            <CreatePoll
              items={this.state.voteOptions}
              publishVoteOptionChange={this.publishVoteOptionChange}
              publishVoteSubjectChange={this.publishVoteSubjectChange}
            />
          </div>
          <div className="voting-sections">
            <SubmitVote titleText={voteSubject} displayOptions={voteOptions} />
          </div>
          <div className="voting-sections">
            <VoteChart titleText={voteSubject} />
          </div>
        </div>
      </div>
    );
  }
}

export default VotingApp;
