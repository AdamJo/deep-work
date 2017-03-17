import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const hourType = ({ hourType }) => {
  switch (hourType) {
    case 1:
      return palette(0);
      break;
    case 2:
      return palette(1);
    default:
      return palette('white', 0);
      break;
  }
};

const hidden = ({ hidden }) => hidden ? 'none' : 'block';
const deep = ({ deep }) => deep ? 'left' : 'bottom';

const CellButton = styled.button`
  background: ${hourType};
  display: ${hidden};
  width: 20px;
  height: 20px;

  &:hover {
  }
`;

CellButton.propTypes = {
  hourType: PropTypes.number,
  palette: PropTypes.string,
};

CellButton.defaultProps = {
  palette: 'greyscale',
  hidden: false,
  deep: 'left',
};

export default CellButton;
