import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

/**
 * handles the input values when changed
 * @param {object} event - the object from the event listener
 * @param {function} updateTimeFormat - updates the store of the time format
 */
function handleInputChange(event, updateTimeFormat) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const timeFormat = value ? '24' : '12';
  updateTimeFormat(timeFormat);
}

const ToggleButton = class ToggleButton extends PureComponent {
  render() {
    return (
      <Switch>
        <input
          type="checkbox"
          checked={!this.props.format}
          onChange={event =>
            handleInputChange(event, this.props.updateTimeFormat)}
        />
        <Slide />
      </Switch>
    );
  }
};

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  outline: 0;
  border:none;
  color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  > input:checked + div {
    box-shadow: inset -10px 0 10px -10px ${palette('primary', 2)};
  }

  > input:focus + div {
    // box-shadow: 10px 0 10px -10px ${palette('primary', 2)};
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
  background-color: ${palette('secondary', 2)};
  box-shadow: inset 10px 0 10px -10px ${palette('primary', 2)};
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${palette('primary', 1)};
    transition: .4s;
  }
`;

ToggleButton.propTypes = {
  updateTimeFormat: PropTypes.func,
  format: PropTypes.bool,
};

ToggleButton.defaultProps = {};

export default ToggleButton;
