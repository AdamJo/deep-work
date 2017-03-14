import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { CellButton, HoverWork, Hours } from 'components';

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

function calcTime(index, drag) {
  allHours[index] = deepOrShallow(allHours[index]);
  return allHours;
}

const DayChart = (
  {
    chart = { format: '12', date: 'Thu Mar 09 2017' },
    updateWorkDate,
    closeWorkHover,
    openWorkHover,
    hourRange,
    ...props
  },
) => {
  return (
    <div>

      <Wrapper
        {...props}
        onMouseDown={() => openWorkHover()}
        onMouseUp={() => closeWorkHover()}
      >
        {time.map((hour, index) => (
          <div key={index}>
            <Hours timeFormat={chart.format} hour={hour} />
            <div style={{ display: 'flex' }}>
              <CellButton
                hourType={allHours[index * 2]}
                onMouseDown={() =>
                  updateWorkDate(calcTime(index * 2, false), chart.date)}
                onMouseEnter={
                  chart.workHover
                    ? () => updateWorkDate(calcTime(index * 2), chart.date)
                    : ''
                }
              />
              &nbsp;
              <CellButton
                hourType={allHours[index * 2 + 1]}
                onMouseDown={() =>
                  updateWorkDate(calcTime(index * 2 + 1, false), chart.date)}
                onMouseEnter={
                  chart.workHover
                    ? () => updateWorkDate(calcTime(index * 2 + 1), chart.date)
                    : ''
                }
              />
            </div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

DayChart.propTypes = {
  chart: PropTypes.object,
  updateWorkDate: PropTypes.func,
  closeWorkHover: PropTypes.func,
  openWorkHover: PropTypes.func,
  hourRange: PropTypes.object,
};

DayChart.defaultProps = {};

export default DayChart;
