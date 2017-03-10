import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { CellButton, HoverWork } from 'components';

// no package and verbose = [...Array(24).keys()];
// adding lodash Range adds an extra 70kb
const time = [...Array(24).keys()].map(data => `${data + 1} `);
const allHours = [...Array(24).keys()].map(data => 0);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justifyContent: space-between;
  text-align: center;
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
    <Wrapper {...props}>
      {time.map((hours, index) => (
        <div key={index}>
          <div>{renderTimeLine(chart.format, hours)}</div>
          <HoverWork
            hidden={chart.workHover}
          />
          <CellButton
            hourType={allHours[index]}
            onClick={() => updateWorkDate(calcTime(index), chart.date)}
            onMouseDown={() => openWorkHover()}
            onMouseUp={() => closeWorkHover()}
          />
          <HoverWork
            hidden={chart.workHover}
          />
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
