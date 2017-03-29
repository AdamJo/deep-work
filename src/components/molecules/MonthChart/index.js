import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { DateRangeWrapper, MonthDays } from 'components';
import shortid from 'shortid';

import { getHours } from 'helpers';

/**
 * determines the color of either deep or shallow work
 * @return {string} first day of the month
 * @return {string} last day of the month
 * @return {Array<string>} list of all months between first and last
 */
const getMonth = () => {
  const curr = new Date();
  const first = new Date(curr.getFullYear(), curr.getMonth(), 1)
    .toString()
    .split(' ')
    .slice(1, 4)
    .join(' ');
  const last = new Date(curr.getFullYear(), curr.getMonth() + 1, 0)
    .toString()
    .split(' ')
    .slice(1, 4)
    .join(' ');
  const workDays = {};

  return [first, last, getDaysInMonth(curr.getMonth(), curr.getFullYear())];
};

/**
 * determines the color of either deep or shallow work
 * @param {number} month current month to look in
 * @param {number} year current year to look in
 * @return {Array<string>} list of days within month
 */
const getDaysInMonth = (month, year) => {
  let date = new Date(year, month, 1);
  let days = [];
  while (date.getMonth() === month) {
    let modifiedDate = new Date(date)
      .toString()
      .replace(/ 0/, ' ')
      .split(' ')
      .slice(1, 4)
      .join(' ');
    days.push(modifiedDate);
    date.setDate(date.getDate() + 1);
  }
  return days;
};

/**
 * determines the color of either deep or shallow work
 * @param {Object} works - all work days of user
 * @param {Array<string>} daysInMonth - list of days in month 
 * @return max deep and shallow days worked
 */
const calcMaxMin = (works, daysInMonth) => {
  let maxDeep = 0;
  let maxShallow = 0;

  daysInMonth.forEach(dates => {
    if (works[dates]) {
      if (works[dates]['deep'] > maxDeep) {
        maxDeep = works[dates]['deep'];
      }
      if (works[dates]['shallow'] > maxShallow) {
        maxShallow = works[dates]['shallow'];
      }
    }
  });
  return [maxDeep, maxShallow];
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  max-width: 700px;
`;

// todo: [x] show monthly day nodes
// cycle from this month to previous or current
const MonthChart = ({ workDates }) => {
  let [first, last, daysInMonth] = getMonth();
  /*let rangeThis = daysInMonth.map((day, index) => (
        <MonthDays key={index}>
          {calcWorkHours(workDates[day])}
        </MonthDays>
    ));*/
  const [maxDeep, maxShallow] = calcMaxMin(
    workDates,
    daysInMonth
  );
  return (
    <Wrapper>
      <DateRangeWrapper>{first} - {last}</DateRangeWrapper>
      {daysInMonth.map((day, index) => {
        const deep = getHours(workDates[day], true);
        const shallow = getHours(workDates[day], false);
        return (
          <div key={shortid.generate()}>
            {/* Calculate % of day to fill on button */}
            <MonthDays
              deepPercentage={deep / maxDeep} 
              shallowPercentage={shallow / maxShallow}
            >
              {day.split(' ')[1]}
            </MonthDays>
          </div>
        );
      })}
    </Wrapper>
  );
};
// {index % 7 === 0 ? <div style={{width: '100%'}}>hello</div> : ''}
MonthChart.propTypes = {
  chart: PropTypes.object,
};

MonthChart.defaultProps = {
  workDates: {},
};

export default MonthChart;
