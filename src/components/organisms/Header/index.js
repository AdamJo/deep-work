import React from 'react';
import styled from 'styled-components';

import { Button } from 'components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
`;

const Header = props => {
  return (
    <Wrapper {...props}>
      <Button>Log In</Button>
      <Button>Log Out</Button>
      <Button>Settings</Button>
    </Wrapper>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
