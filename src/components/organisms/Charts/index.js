import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { ChartMenu, DayChart } from 'components';

const Wrapper = styled.div`
  background: teal;
`;

const Charts = ({ chart, chartView, updateWorkDate, timeFormat, ...props }) => {
  return (
    <Wrapper {...props}>
      <ChartMenu timeFormat={timeFormat} chart={chart} chartView={chartView} />
      {/*
        if else day/week/month/year chart based on chartMenu state
      */}
      <DayChart chart={chart} updateWorkDate={updateWorkDate} />
    </Wrapper>
  );
};

Charts.propTypes = {
  chart: PropTypes.object,
  chartView: PropTypes.func,
  updateWorkDate: PropTypes.func,
  timeFormat: PropTypes.func,
};

export default Charts;
