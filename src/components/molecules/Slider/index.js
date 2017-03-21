import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import Range from 'rc-slider/lib/Range';
import './rc-slider';

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// todo: figuire out why I need this
// this outer wrapper seems to only work with a style component attatched
const OuterWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const Wrapper = styled.div`
  max-width: 360px;
  min-width: 260px;
  height: 40px;
`;

const military = {
  1: '0',
  5: '4',
  9: '8',
  13: '12',
  17: '16',
  21: '20',
  24: '12',
};

const civilian = {
  1: '12am',
  5: '4am',
  9: '8am',
  13: '12pm',
  17: '4pm',
  21: '8pm',
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
      <OuterWrapper style={OuterWrapperStyle}>
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
      </OuterWrapper>
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
