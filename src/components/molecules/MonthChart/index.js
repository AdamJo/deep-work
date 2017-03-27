import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { DateRangeWrapper, MonthDays } from 'components';
import shortid from 'shortid';

import { getHours } from 'helpers';

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  max-width: 800px;
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
  return (
    <Wrapper>
      <DateRangeWrapper>{first} - {last}</DateRangeWrapper>
      {daysInMonth.map((day, index) => (
        <div key={shortid.generate()}>
          <MonthDays>
            {getHours(workDates[day], true)} - {getHours(workDates[day], false)}
          </MonthDays>
        </div>
      ))}
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
