import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { TotalHours } from 'components';

/**
 * calculates the deep or shallow work hours
 * @param {object} hours - object of all hours from workday
 * @param {object} hourRange - range of hours that are shown to user
 * @param {boolean} flag - look for deep or shallow work, true if deep, false if shallow
 * @return {number} calculated number of hours worked that day
 */
function calcHours(hours, hourRange, flag) {
  let count = 0;
  for (let [key, value] of Object.entries(hours)) {
    key = key.replace('-', '.'); // firebase work around for key values and "."'s
    const min = parseInt(key) + 1 >= hourRange.min;
    const max = key <= hourRange.max + 0.5; // half is used for half hours
    if (flag && min && max && value === 0) {
      count += 0.5;
    }
    if (!flag && min && max && value === 1) {
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
    hourRange,
    ...props
  },
) => {
  return (
    <Wrapper {...props}>
      <TotalHours>
        deep:
        {' '}
        {calcHours(hours, hourRange, true)}
      </TotalHours>
      <TotalHours>
        shallow:
        {' '}
        {calcHours(hours, hourRange, false)}
      </TotalHours>
    </Wrapper>
  );
};

Analyze.propTypes = {
  hours: PropTypes.object,
  hourRange: PropTypes.object,
};

Analyze.defaultProps = {
  hours: { 1: 1 },
  hourRange: { min: 1, max: 23 },
};

export default Analyze;
