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

const Modal = ({isOpen, ...props}) => {
  console.log(props);
  return (
    <Wrapper>
      <ReactModal 
        isOpen={isOpen}
        onRequestClose={props.toggleMenu}
        contentLabel="Settings"

      >
        <button onClick={props.toggleMenu}>Close Modal</button>
        <TimeFormat
          updateTimeFormat={props.updateTimeFormat}
          format={props.chart.format === '12' ? true : false}
        />
      </ReactModal>
    </Wrapper>
  )
}

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
