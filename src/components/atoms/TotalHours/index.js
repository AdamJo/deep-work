import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const deepColor = ({ deep }) =>
  deep ? palette('primary', 4) : palette('secondary', 4);

const TotalHours = styled.div`
  color: ${deepColor};
  width: 100px;
`;

TotalHours.propTypes = {};

TotalHours.defaultProps = {
  palette: 'greyscale',
};

export default TotalHours;
