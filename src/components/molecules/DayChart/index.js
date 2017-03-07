import React from 'react';
import styled from 'styled-components';
import { range } from 'lodash';

import { CellButton } from 'components';

// no package and verbose = [...Array(5).keys()];
const civilianTime = range(12).map(data => `${data + 1} `);
const militaryTime = range(24).map(data => `${data + 1} `);

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

const DayChart = () => {
  return (
    <Wrapper>
      <Time>
        AM
        {' '}
        {civilianTime.map(hours => <div><div>{hours}</div><CellButton /></div>)}
      </Time>
      <Time>
        PM
        {' '}
        {civilianTime.map(hours => <div><div>{hours}</div><CellButton /></div>)}
      </Time>
      {/*<Time>
        PM
        {' '}
        {militaryTime.map(hours => <div><div>{hours}</div><CellButton /></div>)}
      </Time>*/}
    </Wrapper>
  );
};

DayChart.propTypes = {};

DayChart.defaultProps = {};

export default DayChart;
