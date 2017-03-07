import React from 'react';
import styled from 'styled-components';
import { ChartMenu, DayChart } from 'components'

const Charts = (props) => {
  console.log(props);
  return (
    <div>
      <ChartMenu/>
      {/*
        if else day/week/month/year chart based on chartMenu state
      */}
      <DayChart/>
    </div>
  )
}

Charts.propTypes = {};

Charts.defaultProps = {};

export default Charts;
