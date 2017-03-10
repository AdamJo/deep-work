import React from 'react';
import styled from 'styled-components';

import { CellButton } from 'components';

// no package and verbose = [...Array(24).keys()];
// adding lodash Range adds an extra 70kb
const time = [...Array(24).keys()].map(data => `${data + 1} `);
const allHours = [...Array(24).keys()].map(data => 0);
const Wrapper = styled.div`
  display: flex;
  justifyContent: center;
  flex-direction: column;
  text-align: center;
`;

const Time = styled.div`
  display: flex;
  flex-direciton: row;
  justifyContent: space-between;
`;

function renderTimeLine(format, hour) {
  if (format === '12') {
    if (hour > 12) {
      return hour - 12;
    } else {
      return hour;
    }
  } else {
    return hour;
  }
}

function calcTime(index) {
  allHours[index] = allHours[index] === 0 ? 1 : 0;
  return allHours;
}

const DayChart = ({ chart={format: '12', date: 'Thu Mar 09 2017'}, updateWorkDate, ...props }) => {
  return (
    <Wrapper {...props}>
      <Time>
        {time.map((hours, index) => (
          <div key={index}>
            <div>{renderTimeLine(chart.format, hours)}</div>
            <CellButton hourType={allHours[index]} onClick={() => updateWorkDate(calcTime(index), chart.date)} />
          </div>
        ))}
      </Time>
    </Wrapper>
  );
};

DayChart.propTypes = {};

DayChart.defaultProps = {};

export default DayChart;
