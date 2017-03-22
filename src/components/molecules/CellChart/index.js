import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { CellButton } from 'components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 5px;
`;

/**
 * calculates the deep or shallow work hours given by the object
 * @param {number} index - index of current position being changed
 * @param {object} hours - object of all hours from workday
 * @return {object} updated object of all hours
 */
function calcHours(index, hours) {
  switch (hours[index]) {
    case undefined:
      hours[index] = 0;
      break;
    case 0:
      hours[index] = 1;
      break;
    case 1:
      delete hours[index];
      break;
  }
  return hours;
}

const CellChart = ({ date, hours, index, updateWorkDate, workHover }) => {
  const halfHour = index + '-5'; // workaround since you can't have periods "." in keys in firebase.
  return (
    <Wrapper>
      <CellButton
        hourType={hours[index]}
        onMouseDown={() => updateWorkDate(calcHours(index, hours), date)}
        onMouseEnter={
          workHover ? () => updateWorkDate(calcHours(index, hours), date) : ''
        }
      />
      &nbsp;
      <CellButton
        hourType={hours[halfHour]}
        onMouseDown={() => updateWorkDate(calcHours(halfHour, hours), date)}
        onMouseEnter={
          workHover
            ? () => updateWorkDate(calcHours(halfHour, hours), date)
            : ''
        }
      />
    </Wrapper>
  );
};

CellChart.propTypes = {
  date: PropTypes.string,
  hours: PropTypes.object,
  index: PropTypes.number,
  updateWorkDate: PropTypes.func,
  workHover: PropTypes.bool,
};

CellChart.defaultProps = {
  hours: { 1: 1 },
};

export default CellChart;
