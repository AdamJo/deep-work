import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { TimeFormat } from 'components';
import ReactModal from 'react-modal';

const Wrapper = styled.div`
  display: flex;
  // width: 100%;
  justify-content: center;
`

const ModalBox = styled(ReactModal)`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: ${font('primary')};
  font-size: 1rem;
  background-color: ${palette('grayscale', 0, true)};
  border-radius: 0.125em;
  color: ${palette('grayscale', 0)};
  top: calc(20% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  transform: translate(-50%, 100%);
  transition: transform 250ms ease-in-out;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  padding-top: ${({ hasHeader }) => hasHeader ? 0 : '1rem'};
  @media screen and (max-width: 640px) {
    width: calc(100% - 1rem);
    min-width: 0;
  }
  &[class*="after-open"] {
    transform: translate(-50%, -50%);
  }
  &[class*="before-close"] {
    transform: translate(-50%, 100%);
  }
`

const Modal = ({isOpen, ...props}) => {
  console.log(props);
  return (
    <Wrapper>
      <ModalBox 
        isOpen={isOpen}
        onRequestClose={props.toggleMenu}
        contentLabel="Settings"
      >
        <button onClick={props.toggleMenu}>Close Modal</button>
        <TimeFormat
          updateTimeFormat={props.updateTimeFormat}
          format={props.chart.format === '12' ? true : false}
        />
      </ModalBox>
    </Wrapper>
  )
}

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
