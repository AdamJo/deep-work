import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'components/themes';
import { font, palette } from 'styled-theme';

const typeOfWork = ({type}) => {
  switch (type) {
    case 'deep':
      return palette(0);
      break;
    case 'shallow':
      return `linear-gradient(bottom, ${theme.palette.greyscale[1]} 50%, ${theme.palette.secondary[4]} 0)`;
      break;
    default:
      return palette('white', 0);
      break;
  }
}

const colorOfWork = ({type}) => {
  switch (type) {
    case 'deep':
      return palette('tertiary', 2);
      break;
    case 'shallow':
      return palette('tertiary', 1);
      break;
    default:
      return '#000000';
      break;
  }
}

const WeekDays = styled.div`
  min-width: 80px;
  text-align: center;

  background: ${typeOfWork};
  color: ${colorOfWork};
  margin-bottom: 11px;

  height: 30px;
  line-height: 30px;
  
  font-weight: 600;
`;

WeekDays.propTypes = {
  type: PropTypes.string,
};

WeekDays.defaultProps = {
  palette: 'greyscale',
};

export default WeekDays;
