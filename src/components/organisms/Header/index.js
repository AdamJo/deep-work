import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { Button } from 'components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
`;

const Header = ({loginWithProvider, logoutUser, ...props}) => {
  return (
    <Wrapper {...props}>
      <Button onClick={() => loginWithProvider('google')}>Log In</Button>
      <Button onClick={logoutUser}>Log Out</Button>
      <Button>Settings</Button>
      <Button onClick={() => console.log(props)}>{'{...props}'}</Button>
    </Wrapper>
  );
};

Header.propTypes = {
  loginWithProvider: PropTypes.func,
  logoutUser: PropTypes.func,
};

Header.defaultProps = {};

export default Header;
