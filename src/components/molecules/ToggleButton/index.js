import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

function handleInputChange(event, updateTimeFormat) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const timeFormat = value ? '24' : '12';
    updateTimeFormat(timeFormat);
}

const ToggleButton = ({updateTimeFormat, format}) => {
  return (
    <Switch>
      <input type='checkbox' onChange={(event) => handleInputChange(event, updateTimeFormat)} />
      <Slide />
    </Switch>
  )};

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  > input:checked + div {
    // background-color: #2196F3;
  }

  > input:focus + div {
    box-shadow: 0 0 1px #2196F3;
  }

  > input:checked + div:before {
    transform: translateX(26px);
  }
`;

const Slide = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
  }
`

ToggleButton.propTypes = {};

ToggleButton.defaultProps = {};

export default ToggleButton;
