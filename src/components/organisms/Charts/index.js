import React from 'react';
import styled from 'styled-components';
import { ChartMenu, DayChart } from 'components'

const Wrapper = styled.div`
  background: teal;
`

const Charts = ({...props}) => {
  return (
    <Wrapper {...props}>
      <ChartMenu/>
      {/*
        if else day/week/month/year chart based on chartMenu state
      */}
      <DayChart/>
    </Wrapper>
  )
}

Charts.propTypes = {};

Charts.defaultProps = {};

export default Charts;
