import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import { ChartMenu, DayChart, Slider, Analyze, WeekChart, MonthChart, YearChart } from 'components';

const Wrapper = styled.div`
  // background: ${palette('greyscale', 4)}
  // width: 800px;
`;

const chartType = (props) => {
  switch(props.chart.viewType) {
    case 'day':
      return (<DayChart
        chart={props.chart}
        hourRange={props.chart.hourRange}
        updateWorkDate={props.updateWorkDate}
        closeWorkHover={props.closeWorkHover}
        openWorkHover={props.openWorkHover}
      />)
    case 'week':
      return (
        <WeekChart/>
      )
    case 'month':
      return (
        <MonthChart/>
      )
    case 'year':
      return (
        <YearChart/>
      )
  }
}

const Charts = (
  {
    ...props
  },
) => {
  return (
    <Wrapper {...props}>
      <ChartMenu
        updateTimeFormat={props.updateTimeFormat}
        chart={props.chart}
        chartView={props.chartView}
      />
      <Slider
        hourRange={props.chart.hourRange}
        workHourRange={props.workHourRange}
        timeFormat={props.chart.format}
      />
      <Analyze hours={props.chart.hours} hourRange={props.chart.hourRange} />
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
  chart: { hours: [0], format: '12', hourRange: { min: 8, max: 18 } },
};

export default Charts;
