import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { TimeFormat, Button } from 'components';
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
  align-items: center;
  font-family: ${font('primary')};
  font-size: 1rem;
  background-color: ${palette('greyscale', 0)};
  border-radius: 0.125em;
  color: ${palette('primary', 0)};
  top: calc(15% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  transform: translate(-50%, 100%);
  transition: transform 250ms ease-in-out;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  padding: 1rem;

  > div:first-child {
    margin: 15px 0;
  }

  > div{
    margin: 5px 0;
  }

  @media screen and (max-width: 640px) {
    top: calc(25% - 1rem);
    width: calc(100% - 1rem);
    min-width: 0;
  }
  &[class*="after-open"] {
    transform: translate(-50%, -50%);
  }
  &[class*="before-close"] {
    transform: translate(-50%, 1000%);
  }
`

const Modal = ({isOpen, format, ...props}) => {
  return (
    <Wrapper>
      <ModalBox 
        isOpen={isOpen}
        onRequestClose={props.toggleMenu}
        contentLabel="Settings"
        closeTimeoutMS={250}
      >
        <Button onClick={props.toggleMenu}>Close Modal</Button>
        <div>Time Format</div>
        <TimeFormat
          updateTimeFormat={props.updateTimeFormat}
          format={format === '12' ? true : false}
        />
      </ModalBox>
    </Wrapper>
  )
}

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;