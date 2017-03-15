import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { CellButton, HoverWork, Hours } from 'components';

// no package and verbose = [...Array(24).keys()];
// adding lodash Range adds an extra 70kb
const time = [...Array(24).keys()].map(data => `${data + 1} `);

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

function calcTime(index, hours) {
  hours[index] = deepOrShallow(hours[index]);
  return hours;
}

function renderTimeFrame(index) {
  return;
}

const DayChart = (
  {
    chart,
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
        {time.map((hour, index) => {
          if (index <= hourRange.max && index >= hourRange.min - 1)
            return (
              <div key={index}>
                <Hours timeFormat={chart.format} hour={hour} />
                <div style={{ display: 'flex' }}>
                  <CellButton
                    hourType={chart.hours[index * 2]}
                    onMouseDown={() =>
                      updateWorkDate(
                        calcTime(index * 2, chart.hours),
                        chart.date,
                      )}
                    onMouseEnter={
                      chart.workHover
                        ? () =>
                            updateWorkDate(
                              calcTime(index * 2, chart.hours),
                              chart.date,
                            )
                        : ''
                    }
                  />
                  &nbsp;
                  <CellButton
                    hourType={chart.hours[index * 2 + 1]}
                    onMouseDown={() =>
                      updateWorkDate(
                        calcTime(index * 2 + 1, chart.hours),
                        chart.date,
                      )}
                    onMouseEnter={
                      chart.workHover
                        ? () =>
                            updateWorkDate(
                              calcTime(index * 2 + 1, chart.hours),
                              chart.date,
                            )
                        : ''
                    }
                  />
                </div>
              </div>
            );
        })}
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

DayChart.defaultProps = {
  chart: { format: '12', date: 'Thu Mar 09 2017', hours: [0] },
  hourRange: { min: 1, max: 24 },
};

export default DayChart;
