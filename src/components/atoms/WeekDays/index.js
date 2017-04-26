import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'components/themes';
import { font, palette } from 'styled-theme';

/**
 * determines the color of either deep or shallow work
 * @param {number} type - either deep (0) or shallow (1) work
 * @return {number} color of work type given
 */
const typeOfWork = ({ type }) => {
  switch (type) {
    case 'deep':
      return palette('primary', 0);
      break;
    case 'shallow':
      return palette('secondary', 2);
      break;
    default:
      return palette('white', 0);
      break;
  }
};

/**
 * determines the color of the text for given work type
 * @param {number} type - either deep (0) or shallow (1) work
 * @return {number} color of work type given
 */
// const colorOfWork = ({ type }) => {
//   switch (type) {
//     default:
//       return '#000000';
//       break;
//   }
// };

const WeekDays = styled.div`
  min-width: 80px;
  text-align: center;

  background: ${typeOfWork};
  color: ${palette('black', 0)};
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
