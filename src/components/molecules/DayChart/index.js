import React from 'react';
import styled from 'styled-components';

import { CellButton } from 'components';

// no package and verbose = [...Array(24).keys()];
// adding lodash Range adds an extra 70kb
const civilianTime = [...Array(12).keys()].map(data => `${data + 1} `);
const militaryTime = [...Array(24).keys()].map(data => `${data + 1} `);

const Wrapper = styled.div`
  display: flex;
  justifyContent: center;
  flex-direction: column;
  text-align: center;
`;

const Time = styled.div`
  display: flex;
  flex-direciton: row;
`;

const DayChart = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      {/*<Time>
        AM
        {' '}
        {civilianTime.map((hours, index) => <div><div>{hours}</div><CellButton /></div>)}
      </Time>
      <Time>
        PM
        {' '}
        {civilianTime.map((hours, index) => <div><div>{hours}</div><CellButton /></div>)}
      </Time>*/}
      <Time>
        {militaryTime.map((hours, index) => (
          <div key={index}><div>{hours}</div><CellButton /></div>
        ))}
      </Time>
    </Wrapper>
  );
};

DayChart.propTypes = {};

DayChart.defaultProps = {};

export default DayChart;
