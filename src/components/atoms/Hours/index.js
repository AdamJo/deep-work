import React from 'react';
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

const Hours = ({ timeFormat, hour }) => (
  <Hour>{renderTimeLine(timeFormat, hour)}</Hour>
);

Hours.propTypes = {};

Hours.defaultProps = {};

export default Hours;
