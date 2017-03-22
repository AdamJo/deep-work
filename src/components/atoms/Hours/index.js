import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';

/**
 * determines the hour for the given time format state
 * @param {string} format - state of the time given : 12 (civilian) or 24 (military) 24
 * @param {string} hour - current hour on button
 * @return {number} hour with formated time
 */
function renderTimeLine(format, hour) {
  if (format === '12') {
    if (hour > 12) {
      return parseInt(hour) - 12;
    } else {
      if (parseInt(hour) === 0) {
        return 12;
      } else {
        return parseInt(hour);
      }
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
