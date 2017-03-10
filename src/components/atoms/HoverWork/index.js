import React, { PropTypes } from 'react';
import styled, { keyframes} from 'styled-components';
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

const floatUp = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const hidden = ({ hidden }) => hidden ? 'none' : 'block';

const CellButton = styled.button`
  background: ${hourType};
  display: ${hidden};
  width: 20px;
  height: 20px;
  animation: ${floatUp} 2s linear infinite;
`;

CellButton.propTypes = {
  hourType: PropTypes.number,
  palette: PropTypes.string,
};

CellButton.defaultProps = {
  palette: 'greyscale',
};

export default CellButton;
