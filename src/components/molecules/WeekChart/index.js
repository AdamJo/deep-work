import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { WeekDays, DateRangeWrapper, Button, DateWrapper } from 'components';
import shortid from 'shortid';

import { getHours, splitTime } from 'helpers';
/**
 * calculates the given week from Sunday to Monday
 * @return {array} firstDay: first day of the week,
 *                 lastDay: last day of the week,
 *                 workDays: an object of days between first and last.
 */
const getWeek = (firstDay) => {
  // http://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-week-in-javascript

  const curr = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, firstDay.getDay()); // get current date
  const workDays = {};
  for (let x in [...Array(7).keys()]) {
    workDays[x] = new Date(curr.setDate(parseInt(firstDay.getDate()) + parseInt(x)))
      .toString()
      .split(' ')
      .slice(1, 4)
      .join(' ');
  }
  return workDays;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  // user-select: none;
  max-width: 800px;
`;

const InnerWrapper = styled.div`
  margin: 0 5px;
`;

const daysInWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const WeekChart = ({ workDates, subtractWeek, addWeek, weekSelected }) => {
  const workDays = getWeek(weekSelected.first);
  return (
    <Wrapper>
      <DateRangeWrapper>
        <Button cycle
          onClick={() => subtractWeek(weekSelected)}
        >
          -
        </Button>
        <DateWrapper>
          <div>{weekSelected.first.getFullYear()}</div>
          <div>
            {splitTime(weekSelected.first)}
            {' '}
            -
            {' '}
            {splitTime(weekSelected.last)}
          </div>
        </DateWrapper>
        <Button cycle onClick={() => addWeek(weekSelected)}>
          +
        </Button>
      </DateRangeWrapper>
      {daysInWeek.map((day, index) => (
        <InnerWrapper key={shortid.generate()}>
          <WeekDays>{day}</WeekDays>
          <WeekDays type="deep">
            {getHours(workDates[workDays[index]], true)}
          </WeekDays>
          <WeekDays type="shallow">
            {getHours(workDates[workDays[index]], false)}
          </WeekDays>
        </InnerWrapper>
      ))}
    </Wrapper>
  );
};

WeekChart.propTypes = {
  workDates: PropTypes.object,
  subtractWeek: PropTypes.func,
  addWeek: PropTypes.func,
  weekSelected: PropTypes.object,
};

WeekChart.defaultProps = {
  workDates: {},
  weekSelected: {first: new Date()},
};

export default WeekChart;
