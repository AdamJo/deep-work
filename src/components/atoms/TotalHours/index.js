import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const TotalHours = styled.div`
  // color: ${palette(0)};
`;

TotalHours.propTypes = {};

TotalHours.defaultProps = {
  palette: 'greyscale',
};

export default TotalHours;
