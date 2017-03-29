import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const workFill = ({ deepPercentage, shallowPercentage }) =>
  deepPercentage === 0 && shallowPercentage === 0
    ? `rgba(239, 243, 247, .50)`
    : `linear-gradient(to right, rgba(255,196,46,${deepPercentage}) 0%, rgba(87,117,144,${shallowPercentage}) 100%);`;

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
  background: ${workFill};
`;

MonthDays.propTypes = {
  deepPercentage: PropTypes.number,
  shallowPercentage: PropTypes.number,
};

MonthDays.defaultProps = {};

export default MonthDays;
