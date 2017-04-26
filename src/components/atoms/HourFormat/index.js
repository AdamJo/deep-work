import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const active = ({ format }) =>
  format ? palette('primary', 1) : palette('primary', 4);

const HourFormat = styled.div`
  color: ${active};
  height: 34px;
  line-height: 34px;
  margin: 0 20px;
`;

HourFormat.propTypes = {
  format: PropTypes.bool,
};

HourFormat.defaultProps = {};

export default HourFormat;
