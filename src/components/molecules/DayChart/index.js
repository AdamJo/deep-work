import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { CellButton, HoverWork } from 'components';

// no package and verbose = [...Array(24).keys()];
// adding lodash Range adds an extra 70kb
const time = [...Array(24).keys()].map(data => `${data + 1} `);
const allHours = [...Array(48).keys()].map(data => 0);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justifyContent: space-between;
  flex-wrap: wrap;
  text-align: center;
  user-select: none;
`;

const Hours = styled.div`
  user-select: none;
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

function deepOrShallow(index) {
  switch (index) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 0;
  }
}

function calcTime(index, half) {
  allHours[index] = deepOrShallow(allHours[index]);
  return allHours;
}

function findWork(index) {
  allHours[index] = deepOrShallow(allHours[index]);
}



const DayChart = (
  {
    chart={ format: '12', date: 'Thu Mar 09 2017' },
    updateWorkDate,
    closeWorkHover,
    openWorkHover,
    ...props
  },
) => {
  return (
    <Wrapper {...props}
    >
      {/*onMouseDown={() => findWork()}*/}
      {time.map((hours, index) => (
        <div key={index}>
          <Hours >{renderTimeLine(chart.format, hours)}</Hours>
          <div style={{display: 'flex'}} >
            <CellButton
              hourType={allHours[index * 2]}
              onClick={() => updateWorkDate(calcTime(index * 2), chart.date)}
            ></CellButton>
              &nbsp;
            <CellButton
              hourType={allHours[index * 2 + 1]}
              onClick={() => updateWorkDate(calcTime(index * 2 + 1), chart.date)}
            ></CellButton>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

DayChart.propTypes = {
  chart: PropTypes.object,
  updateWorkDate: PropTypes.func,
  closeWorkHover: PropTypes.func,
  openWorkHover: PropTypes.func,
};

DayChart.defaultProps = {};

export default DayChart;
