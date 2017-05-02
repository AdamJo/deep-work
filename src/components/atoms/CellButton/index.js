import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'components/themes';
import { font, palette } from 'styled-theme';

/**
 * determines which color the hours type should be
 * @param {number} hourType - type of hours, 0 = deep, 1 = shallow, none = default
 * @return {number} color of button
 */
const hourType = ({ hourType }) => {
  switch (hourType) {
    case 0:
      return palette('primary', 0);
      break;
    case 1:
      return `linear-gradient(to top, ${theme.palette.secondary[2]} 50%, ${theme.palette.white[0]} 0)`;
      break;
    default:
      return palette('white', 0);
      break;
  }
};

const CellButton = styled.div`
  background: ${hourType};
  width: 60px;
  height: 30px;
  user-select: none;
`;

CellButton.propTypes = {
  hourType: PropTypes.number,
  palette: PropTypes.string,
};

CellButton.defaultProps = {
  palette: 'greyscale',
};

export default CellButton;
