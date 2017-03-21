import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { WeekDays } from 'components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  user-select: none;
  max-width: 800px;
`;

const LeftSideOfGrid = styled.div`
  margin-top: 20px;

  div {
    margin: 10px 0;
  }
`;

const InnerWrapper = styled.div`
  margin: 0 5px;
`

const daysInWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
// todo: cycle from this week to previous, every 7 days
const WeekChart = () => {
  return (
    <Wrapper>
      {/*<LeftSideOfGrid>
        <div>deep</div>
        <div>shallow</div>
      </LeftSideOfGrid>*/}
      {daysInWeek.map((day, index) => (
        <InnerWrapper key={index}>
          <WeekDays>{day}</WeekDays>
          <WeekDays type="deep">5</WeekDays>
          <WeekDays type="shallow">5.5</WeekDays>
        </InnerWrapper>
      ))}
    </Wrapper>
  );
};

WeekChart.propTypes = {};

WeekChart.defaultProps = {};

export default WeekChart;
