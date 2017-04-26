import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  width: 120px;
  height: 40px;
  @media (max-width: 30em){
    margin: 0 5px;
  }
`;

DateWrapper.propTypes = {};

DateWrapper.defaultProps = {};

export default DateWrapper;
