import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import {
  ChartMenu,
  DayChart,
  Slider,
  Analyze,
  WeekChart,
  MonthChart,
  YearChart,
} from 'components';

// todo: remove when finished with cells, used for debuggings
let date = new Date();
date = date.toString().split(' ').slice(1, 4).join(' ');

const Wrapper = styled.div`
  // background: ${palette('greyscale', 4)}
  // width: 800px;
`;

const chartType = props => {
  switch (props.chart.viewType) {
    case 'day':
      return (
        <div>
          <Slider
            hourRange={props.chart.hourRange}
            workHourRange={props.workHourRange}
            timeFormat={props.chart.format}
          />
          <Analyze
            hours={props.chart.workDates[date]}
            hourRange={props.chart.hourRange}
          />
          <DayChart
            chart={props.chart}
            hourRange={props.chart.hourRange}
            updateWorkDate={props.updateWorkDate}
            closeWorkHover={props.closeWorkHover}
            openWorkHover={props.openWorkHover}
          />
        </div>
      );
    case 'week':
      return <WeekChart workDates={props.chart.workDates} />;
    case 'month':
      return <MonthChart workDates={props.chart.workDates}  />;
    case 'year':
      return <YearChart />;
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
