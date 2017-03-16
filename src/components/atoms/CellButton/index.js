import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'components/themes';
import { font, palette } from 'styled-theme';

const hourType = ({ hourType }) => {
  switch (hourType) {
    case 1:
      return palette(0);
      break;
    case 2:
      return `linear-gradient(bottom, ${theme.palette.greyscale[1]} 50%, ${theme.palette.white[0]} 0)`;
    default:
      return palette('white', 0);
      break;
  }
};

const CellButton = styled.div`
  background: ${hourType};
  width: 40px;
  height: 20px;
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
