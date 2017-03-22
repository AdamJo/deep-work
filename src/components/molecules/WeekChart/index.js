import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { WeekDays } from 'components';


/**
 * calculates the given week from Sunday to Monday
 * @return {array} firstDay: first day of the week,
 *                 lastDay: last day of the week,
 *                 workDays: an object of days between first and last.
 */
const getWeek = () => {
  // http://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-week-in-javascript
  const curr = new Date; // get current date
  const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  const last = first + 6; // last day is the first day + 6

  const firstDay = new Date(curr.setDate(first)).toString().split(' ').slice(1, 4).join(' ');
  const lastDay = new Date(curr.setDate(last)).toString().split(' ').slice(1, 4).join(' ');

  const day = {}
  for (let x in [...Array(7).keys()]) {
    day[x] = new Date(curr.setDate(parseInt(first) + parseInt(x))).toString().split(' ').slice(1, 4).join(' ');
  }
  return [firstDay, lastDay, day];
}

const calcWork = (day, deep) => {
  if (day !== undefined) {
    return Object.values(day).reduce((acc, value) => {
      if (deep && value === 0) {
        
        return acc + .5;
      } else if (!deep && value === 1) {
        console.log(value);
        return acc + .5;
      } else {
        return acc + 0;
      }
    }, 0)
  } else {
    return 0;
  }
}

const DateRangeWrapper = styled.div`
  width: 100%;
  margin: 15px 0;
`

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
`

const daysInWeek = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa',];
// todo: cycle from this week to previous, every 7 days
const WeekChart = ({workDates}) => {
  const [firstDay, lastDay, workDays] = getWeek();
  return (
    <Wrapper>
      {/*<DateRangeWrapper style={{width: '100%'}}>{getWeek()}</DateRangeWrapper>*/}
      {daysInWeek.map((day, index) => (
        <InnerWrapper key={index}>
          <WeekDays>{day}</WeekDays>
          <WeekDays type="deep">{calcWork(workDates[workDays[index]], true)}</WeekDays>
          <WeekDays type="shallow">{calcWork(workDates[workDays[index]], false)}</WeekDays>
        </InnerWrapper>
      ))}
    </Wrapper>
  );
};

WeekChart.propTypes = {};

WeekChart.defaultProps = {};

export default WeekChart;
