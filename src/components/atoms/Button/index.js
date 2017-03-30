import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

// const backgroundColor = () =>
//   transparent ? 'transparent' : palette(disabled ? 2 : 1)

const active = ({ active }) =>
  active === undefined || active
    ? palette('primary', 0)
    : palette('secondary', 0);
const hoverBackground = ({ active }) =>
  active === undefined || active
    ? palette('primary', 2)
    : palette('secondary', 2);
const activeBackground = ({ active }) =>
  active === undefined || active
    ? palette('primary', 3)
    : palette('secondary', 3);

const cycle = ({ cycle }) => cycle ? '60px' : '100px';

const Button = styled.div`
  /* Adjust the Button styling based on the theme */
  background: ${active};
  font-weight: bold;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: ${palette('black', 0)};

  -webkit-tap-highlight-color: rgba(0,0,0,0);

  min-width: ${cycle};
  text-align: center;
  
  margin: 0 5px;
  white-space: nowrap;
  &:hover {
    background: ${hoverBackground};
  }
  &:active {
    background: ${activeBackground};
  }
  &:focus {
    outline: none;
  }
`;
Button.propTypes = {
  action: PropTypes.string,
  palette: PropTypes.string,
};

Button.defaultProps = {
  palette: 'primary',
};

export default Button;
