import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const TotalHours = styled.div`
  // background: ${palette(0)};
`;

TotalHours.propTypes = {};

TotalHours.defaultProps = {
  palette: 'primary',
};

export default TotalHours;
