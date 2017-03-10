import React from 'react';
import React, { PropTypes } from 'react';
import styled from 'styled-components';

const CellButton = styled.button`
  background: pink;
  width: 20px;
  height: 20px;
`;

CellButton.propTypes = {
  hourType: PropTypes.number,
  palette: PropTypes.string
};

CellButton.defaultProps = {
  palette: 'greyscale'
};

export default CellButton;
