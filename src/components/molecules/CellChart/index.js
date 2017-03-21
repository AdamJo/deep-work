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

const CellChart = ({ date, hours, index, updateWorkDate, workHover }) => {
  const evenIndex = index * 2;
  const oddIndex = index * 2 + 1;
  return (
    <Wrapper>
      <CellButton
        hourType={hours[evenIndex]}
        onMouseDown={() => updateWorkDate(calcTime(evenIndex, hours), date)}
        onMouseEnter={
          workHover ? () => updateWorkDate(calcTime(evenIndex, hours), date) : ''
        }
      />
      &nbsp;
      <CellButton
        hourType={hours[oddIndex]}
        onMouseDown={() => updateWorkDate(calcTime(oddIndex, hours), date)}
        onMouseEnter={
          workHover
            ? () => updateWorkDate(calcTime(oddIndex, hours), date)
            : ''
        }
      />
    </Wrapper>
  )
};

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
