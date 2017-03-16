import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import { Button, ToggleButton } from 'components';

const Wrapper = styled.div`
  display: flex;
  margin: 0 20px;
`

const TimeFormat = (  {
    format,
    updateTimeFormat,
    ...props
  }) => (
    <Wrapper>
      <span>12</span>
      <ToggleButton updateTimeFormat={updateTimeFormat} active={format}/>
      {/*<RcToggle updateTimeFormat={updateTimeFormat} active={format}/>*/}
      <span>24</span>
    </Wrapper>
  );

/*<RcToggle updateTimeFormat={updateTimeFormat} format={format}/>*/
/*<Button
  active={format === '12' ? true : false}
  onClick={() => updateTimeFormat('12')}
>
  12h
</Button>
<Button
  active={format === '24' ? true : false}
  onClick={() => updateTimeFormat('24')}
>
  24h
</Button>*/

TimeFormat.propTypes = {
  timeFormat: PropTypes.func,
  format: PropTypes.bool,
};

TimeFormat.defaultProps = {

};

export default TimeFormat;
