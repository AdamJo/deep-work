import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const active = ({ deepPercentage, shallowPercentage }) => {
  console.log(deepPercentage, shallowPercentage)
}

const MonthDays = styled.div`
  min-width: 80px;
  text-align: center;

  background: white;
  color: black;
  margin-bottom: 11px;

  height: 30px;
  line-height: 30px;
  
  font-weight: 600;

  margin: 5px;
  color: ${active};
`;

MonthDays.propTypes = {};

MonthDays.defaultProps = {};

export default MonthDays;
