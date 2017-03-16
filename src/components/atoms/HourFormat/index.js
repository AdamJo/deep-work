import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const active = ({format}) => {
  console.log(format);
  return format ? palette('primary', 1) : palette('primary', 4)
}

const HourFormat = styled.div`
  color: ${active};
  height: 34px;
  line-height: 34px;
  margin: 0 20px;
`

HourFormat.propTypes = {};

HourFormat.defaultProps = {};

export default HourFormat;
