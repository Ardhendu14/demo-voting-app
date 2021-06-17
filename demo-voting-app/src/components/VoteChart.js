import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'primereact/chart';

const basicData = {
  labels: ['Polls'],
  datasets: [
      {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [8]
      },
      {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [14]
      }
  ]
};

const VoteChart = (props) => {
  const { titleText } = props;
  return (
    <div className="vote-chart">
      <h2>{titleText}</h2>
      <Chart type="bar" data={basicData} />
    </div>
  );
}

VoteChart.propTypes = {
  titleText: PropTypes.string,
};

VoteChart.defaultProps = {
  titleText: '',
};

export default VoteChart;