import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { TotalHours } from 'components';

function calcHours(hours, hourRange, deep) {
  return hours.reduce(
    (acc, hour, index, arr) => {
      const calcRangeHour = Math.round(index / 2);
      const min = calcRangeHour >= hourRange.min;
      const max = calcRangeHour <= hourRange.max;
      if (deep && min && max) {
        if (hour === 1) {
          return acc + 0.5;
        } else {
          return acc + 0;
        }
      } else if (!deep && min && max) {
        if (hour === 2) {
          return acc + 0.5;
        } else {
          return acc + 0;
        }
      } else {
        return acc + 0;
      }
    },
    0
  );
}

function calcTemp(hours, hourRange) {
  let count = 0;
  for (let [key, value] of Object.entries(hours)) {
    // const calcRangeHour = Math.round(index / 2);
    const min = key >= hourRange.min;
    const max = key <= hourRange.max;
    if (min && max) {
      count += 0.5;
    }
  }
  return count;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Analyze = (
  {
    hours,
    temp,
    hourRange,
    ...props
  }
) => {
  return (
    <Wrapper {...props}>
      <TotalHours>
        deep:
        {' '}
        {calcHours(hours, hourRange, true)}
        {' '}
        --
        {' '}
        {calcTemp(temp.deep, hourRange)}
      </TotalHours>
      <TotalHours>
        shallow:
        {' '}
        {calcHours(hours, hourRange, false)}
        {' '}
        --
        {' '}
        {calcTemp(temp.shallow, hourRange)}
      </TotalHours>
    </Wrapper>
  );
};

Analyze.propTypes = {
  hours: PropTypes.array,
  hourRange: PropTypes.object
};

Analyze.defaultProps = {
  temp: {
    deep: {},
    shallow: {},
  },
  hours: [0],
  hourRange: { min: 1, max: 24 }
};

export default Analyze;
