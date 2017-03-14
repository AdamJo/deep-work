import React, {PropTypes} from 'react';
import styled from 'styled-components';

import { TotalHours } from 'components';

const Wrapper = styled.div`
  display: flex;
  background: lightgreen;
`
const Analyze =  (
  {
    hours,
    hourRange,
    ...props
  },
) => {
  return (
    <Wrapper {...props}>
    </Wrapper>
  ) 
}

Analyze.propTypes = {
  hours: PropTypes.array,
  hourRange: PropTypes.object,
};


export default Analyze;
