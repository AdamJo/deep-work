import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';

function renderTimeLine(format, hour) {
  if (format === '12') {
    if (hour > 12) {
      return hour - 12;
    } else {
      return hour;
    }
  } else {
    return hour;
  }
}

const Hour = styled.div`
  user-select: none;
`;

const Hours = class Hours extends PureComponent {
  render() {
    return (
      <Hour>{renderTimeLine(this.props.timeFormat, this.props.hour)}</Hour>
    );
  }
};

Hours.propTypes = {
  timeFormat: PropTypes.string,
  hour: PropTypes.string,
};

Hours.defaultProps = {
  timeFormat: '12',
  hour: '1',
};

export default Hours;
