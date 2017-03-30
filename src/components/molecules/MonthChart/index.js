import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { DateRangeWrapper, MonthDays, Button } from 'components';
import shortid from 'shortid';

import { getHours, addComma } from 'helpers';

/**
 * determines the color of either deep or shallow work
 * @return {string} first day of the month
 * @return {string} last day of the month
 * @return {Array<string>} list of all months between first and last
 */
const getMonth = () => {
  const curr = new Date();
  const first = addComma(new Date(curr.getFullYear(), curr.getMonth(), 1))

  const last = addComma(new Date(curr.getFullYear(), curr.getMonth() + 1, 0))

  return getDaysInMonth(curr.getMonth(), curr.getFullYear());
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

const MonthChart = ({ workDates, monthSelected, subtractMonth, addMonth }) => {
  
  let daysInMonth = getDaysInMonth(monthSelected.first.getMonth(), monthSelected.first.getFullYear())
  const [maxDeep, maxShallow] = calcMaxMin(
    workDates,
    daysInMonth
  );
  return (
    <Wrapper>
      <DateRangeWrapper>
        <Button
          onClick={() => subtractMonth(monthSelected.first, monthSelected.first.getFullYear())}
        >
          -
        </Button>
        {addComma(monthSelected.first)}
        {' '}
        -
        {' '}
        {addComma(monthSelected.last)}
        <Button onClick={() => addMonth(monthSelected.first, monthSelected.first.getFullYear())}>
          +
        </Button>
      </DateRangeWrapper>
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

MonthChart.propTypes = {
  workDates: PropTypes.object,
  subtractMonth: PropTypes.func,
  addMonth: PropTypes.func,
  monthkSelected: PropTypes.object,
};

MonthChart.defaultProps = {
  workDates: {},
  monthSelected: {first: new Date()},
};

export default MonthChart;
