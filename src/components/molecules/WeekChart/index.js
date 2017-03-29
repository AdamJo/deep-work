import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { WeekDays, DateRangeWrapper } from 'components';
import shortid from 'shortid';

import { getHours, addComma } from 'helpers';
/**
 * calculates the given week from Sunday to Monday
 * @return {array} firstDay: first day of the week,
 *                 lastDay: last day of the week,
 *                 workDays: an object of days between first and last.
 */
const getWeek = () => {
  // http://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-week-in-javascript
  let curr = new Date(); // get current date
  const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

  const last = first + 6; // last day is the first day + 6

  const firstDay = addComma(new Date(curr.setDate(first)));

  const lastDay = addComma(new Date(curr.setDate(last)));

  curr = new Date(); // get current date
  const workDays = {};
  for (let x in [...Array(7).keys()]) {
    workDays[x] = new Date(curr.setDate(parseInt(first) + parseInt(x)))
      .toString()
      .split(' ')
      .slice(1, 4)
      .join(' ');
  }
  return [firstDay, lastDay, workDays];
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
// todo: cycle from this week to previous, every 7 days
const WeekChart = ({ workDates }) => {
  const [firstDay, lastDay, workDays] = getWeek();
  return (
    <Wrapper>
      <DateRangeWrapper>{firstDay} - {lastDay}</DateRangeWrapper>
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
};

WeekChart.defaultProps = {
  workDates: {},
};

export default WeekChart;
