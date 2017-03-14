import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Range from 'rc-slider/lib/Range';

const Wrapper = styled.div`
  width: 400px;
  margin: 50px;
`

const military = {
  1: '01:00',
  4: '04:00',
  8: '08:00',
  12: '12:00',
  16: '16:00',
  20: '20:00',
  24: '00:00',
};

const civilian = {
  1: '1am',
  4: '4am',
  8: '8am',
  12: '12pm',
  16: '4pm',
  20: '8pm',
  24: '12am',
};

const Slider = ({ timeFormat, workHourRange, hoursRange }) => (
  <Wrapper>
    <Range
      allowCross={false}
      marks={timeFormat === '24' ? military : civilian}
      defaultValue={hoursRange}
      min={1}
      max={24}
      onChange={workHourRange}
    />
  </Wrapper>
);

Slider.propTypes = {
  workHourRange: PropTypes.func,
  timeFormat: PropTypes.string,
  hoursRange: PropTypes.array,
};

export default Slider;
