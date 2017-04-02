import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';
const json2csv = require('json2csv');
import { hoursInDay } from 'helpers';

import {
  ChartMenu,
  DayChart,
  Slider,
  Analyze,
  WeekChart,
  MonthChart,
} from 'components';

import { formatDate } from 'helpers';

// todo: remove when finished with cells, used for debuggings
let date = new Date();
date = date.toString().split(' ').slice(1, 4).join(' ');

const Hr = styled.hr`
  width: 90%;
`;

const Wrapper = styled.div`
  // background: ${palette('greyscale', 4)}
  // width: 800px;
`;

function fieldsStuff(row = {}, field) {
  const mergedHours = Object.assign(hoursInDay, row[field['label']]);
  const finalKey = Object.assign(hoursInDay, row[field['label']]);
  let arr = [];
  let limited = `${row[field['label']]['deep']} ${row[field['label']]['shallow']}`;

  if (
    (typeof row[field['label']]['deep'] !== 'undefined', typeof row[
      field['label']
    ]['shallow'] !== 'undefined')
  ) {
    limited = `${row[field['label']]['deep']} ${row[field['label']]['shallow']}`;
  } else {
    limited = `0 0`;
  }

  // grabs all hours numbers
  // const newArr = arr.map((data, index) => finalKey[data]);
  // if (field['label'] === 'Apr 1 2017') {
  //   for (let key of Object.keys(mergedHours)) {
  //     if (key.includes('-')) {
  //       arr.push(parseFloat(key.replace('-', '.')));
  //     } else if (!isNaN(parseInt(key))) {
  //       arr.push(parseInt(key));
  //     }
  //   }
  //   arr.sort((a, b) => a-b);
  //   arr.push('deep')
  //   arr.push('shallow');

  //   arr.forEach((data, index) => {
  //     arr[index] = mergedHours[data.toString().replace('.', '-')];
  //   })
  // }
  return limited;
  // return JSON.stringify(mergedHours).replace(/,/g, ' ').replace(/({|})/g, '').replace(/-/g, '.');
}

function convert(obj) {
  let fields = [];
  for (let [key, value] of Object.entries(obj)) {
    fields.push({
      label: key,
      value: function(row, field) {
        return fieldsStuff(row, field);
      },
    });
  }
  const result = json2csv({
    data: obj,
    fields,
    quotes: '',
  });
  return result;
}

const chartType = props => {
  convert(props.chart.workDates);
  switch (props.chart.viewType) {
    case 'day':
      return (
        <div>
          <DayChart
            chart={props.chart}
            hourRange={props.chart.hourRange}
            updateWorkDate={props.updateWorkDate}
            closeWorkHover={props.closeWorkHover}
            openWorkHover={props.openWorkHover}
            daySelected={props.daySelected}
            addDay={props.addDay}
            subtractDay={props.subtractDay}
            user={props.currentUser}
          />
        </div>
      );
    case 'week':
      return (
        <WeekChart
          workDates={props.chart.workDates}
          addWeek={props.addWeek}
          subtractWeek={props.subtractWeek}
          weekSelected={props.chart.weekSelected}
          swapToDate={props.swapToDate}
        />
      );
    case 'month':
      return (
        <MonthChart
          workDates={props.chart.workDates}
          addMonth={props.addMonth}
          subtractMonth={props.subtractMonth}
          monthSelected={props.chart.monthSelected}
          swapToDate={props.swapToDate}
        />
      );
  }
};

const Charts = (
  {
    ...props
  },
) => {
  return (
    <Wrapper {...props}>
      <ChartMenu
        updateTimeFormat={props.updateTimeFormat}
        viewType={props.chart.viewType}
        chartView={props.chartView}
      />
      <Hr />
      {chartType(props)}
    </Wrapper>
  );
};

Charts.propTypes = {
  chart: PropTypes.object,
  chartView: PropTypes.func,
  updateWorkDate: PropTypes.func,
  timeFormat: PropTypes.func,
  hourRange: PropTypes.object,
};

Charts.defaultProps = {
  chart: {
    hours: [0],
    format: '12',
    workDates: {},
    hourRange: { min: 8, max: 18 },
  },
};

export default Charts;
