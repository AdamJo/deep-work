import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import { Button, ToggleButton, HourFormat } from 'components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 20px;
`;

const TimeFormat = class TimeFormat extends PureComponent {
  render() {
    return (
      <Wrapper>
        <HourFormat format={this.props.format}>12</HourFormat>
        <ToggleButton
          updateTimeFormat={this.props.updateTimeFormat}
          format={this.props.format}
        />
        <HourFormat format={!this.props.format}>24</HourFormat>
      </Wrapper>
    );
  }
};

TimeFormat.propTypes = {
  timeFormat: PropTypes.func,
  format: PropTypes.bool,
};

TimeFormat.defaultProps = {};

export default TimeFormat;
