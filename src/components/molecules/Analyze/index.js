import React, {PropTypes} from 'react';
import styled from 'styled-components';

import { TotalHours } from 'components';


function calcHours(hours, hourRange, deep) {
  return hours.reduce((acc, hour, index, arr) => {
    const calcRangeHour = Math.round(index / 2);
    const min = calcRangeHour >= hourRange.min;
    const max = calcRangeHour <= hourRange.max;
    if (deep && min && max) {
      if (hour === 1) {
        return acc + .5
      } else {
        return acc + 0
      }
    } else if (!deep && min && max) {
      if (hour === 2) {
        return acc + .5
      } else {
        return acc + 0
      }
    } else {
      return acc + 0;
    }
  }, 0)
}

const Wrapper = styled.div`
  display: flex;
  background: lightgreen;
`

const Analyze =  (
  {
    hours,
    hourRange,
    ...props
  },
) => {
  return (
    <Wrapper {...props}>
      <TotalHours>deep: {calcHours(hours, hourRange, true)}</TotalHours>
      ---
      <TotalHours>shallow: {calcHours(hours, hourRange, false)}</TotalHours>
    </Wrapper>
  ) 
}

Analyze.propTypes = {
  hours: PropTypes.array,
  hourRange: PropTypes.object,
};

Analyze.defaultProps = {
  hours: [0],
  hourRange: {min: 1, max: 24},
};

export default Analyze;
