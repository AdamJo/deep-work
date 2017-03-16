import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import Range from 'rc-slider/lib/Range';
import './rc-slider';

const Wrapper = styled.div`
  width: 400px;
  margin: 50px;
  display: flex;
  justifyContent: center;
`;

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

/*const Slider = ({ timeFormat, workHourRange, hourRange }) => (
  <Wrapper>
    <Range
      allowCross={false}
      marks={timeFormat === '24' ? military : civilian}
      value={[hourRange.min, hourRange.max]}
      min={1}
      max={24}
      onChange={workHourRange}
    />
  </Wrapper>
);*/

const Slider = class Slider extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Range
          allowCross={false}
          marks={this.props.timeFormat === '24' ? military : civilian}
          value={[this.props.hourRange.min, this.props.hourRange.max]}
          min={1}
          max={24}
          onChange={this.props.workHourRange}
        />
      </Wrapper>
    );
  }
};

Slider.propTypes = {
  workHourRange: PropTypes.func,
  timeFormat: PropTypes.string,
  hourRange: PropTypes.object,
};

Slider.defaultProps = {
  hourRange: { min: 1, max: 24 },
};

export default Slider;
