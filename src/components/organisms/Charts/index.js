import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { ChartMenu, DayChart, Slider } from 'components';

const Wrapper = styled.div`
  background: teal;
`;

const Charts = (
  {
    chart = { format: '12', hourRange: {min: 8,max: 18} },
    chartView,
    updateWorkDate,
    updateTimeFormat,
    closeWorkHover,
    openWorkHover,
    workHourRange,
    ...props
  },
) => {
  return (
    <Wrapper {...props}>
      {/*
        if else day/week/month/year chart based on chartMenu state
      */}
      <ChartMenu
        updateTimeFormat={updateTimeFormat}
        chart={chart}
        chartView={chartView}
      />
      <Slider hourRange={chart.hourRange} workHourRange={workHourRange} timeFormat={chart.format} />
      <DayChart
        chart={chart}
        hourRange={chart.hourRange}
        updateWorkDate={updateWorkDate}
        closeWorkHover={closeWorkHover}
        openWorkHover={openWorkHover}
      />
    </Wrapper>
  );
};

Charts.propTypes = {
  chart: PropTypes.object,
  chartView: PropTypes.func,
  updateWorkDate: PropTypes.func,
  timeFormat: PropTypes.func,
  hourRange: PropTypes.object
};

export default Charts;
