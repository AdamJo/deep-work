import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { CellButton } from 'components';

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

const Wrapper = styled.div`
  display: flex;
  margin: 0 5px;
`;

const CellChart = ({ date, hours, index, updateWorkDate, workHover }) => (
  <Wrapper>
    <CellButton
      hourType={hours[index * 2]}
      onMouseDown={() => updateWorkDate(calcTime(index * 2, hours), date)}
      onMouseEnter={
        workHover ? () => updateWorkDate(calcTime(index * 2, hours), date) : ''
      }
    />
    &nbsp;
    <CellButton
      hourType={hours[index * 2 + 1]}
      onMouseDown={() => updateWorkDate(calcTime(index * 2 + 1, hours), date)}
      onMouseEnter={
        workHover
          ? () => updateWorkDate(calcTime(index * 2 + 1, hours), date)
          : ''
      }
    />
  </Wrapper>
);

CellChart.propTypes = {
  date: PropTypes.string,
  hours: PropTypes.array,
  index: PropTypes.number,
  updateWorkDate: PropTypes.func,
  workHover: PropTypes.bool,
};

CellChart.defaultProps = {
  hours: [0],
};

export default CellChart;
