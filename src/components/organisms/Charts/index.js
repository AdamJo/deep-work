import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { ChartMenu, DayChart } from 'components';

const Wrapper = styled.div`
  background: teal;
`;

const Charts = ({ chart, chartView, updateDay, ...props }) => {
  return (
    <Wrapper {...props}>
      <ChartMenu chart={chart} chartView={chartView} />
      {/*
        if else day/week/month/year chart based on chartMenu state
      */}
      <DayChart chart={chart} updateDay={updateDay} />
    </Wrapper>
  );
};

Charts.propTypes = {
  chart: PropTypes.object,
  chartView: PropTypes.func,
  updateDay: PropTypes.func
};

Charts.defaultProps = {};

export default Charts;
