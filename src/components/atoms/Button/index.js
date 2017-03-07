import React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

// const backgroundColor = () =>
//   transparent ? 'transparent' : palette(disabled ? 2 : 1)

const Button = styled.div`
  /* Adjust the Button styling based on the theme */
  background: ${palette(0)};
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
  
  margin: 0 5px;
  white-space: nowrap;
  &:hover {
    background: ${palette(2)};
  }
  &:active {
    background: ${palette(3)};
  }
  &:focus {
    outline: none;
  }
`;
Button.propTypes = {};

Button.defaultProps = {
  palette: 'primary',
};

export default Button;
