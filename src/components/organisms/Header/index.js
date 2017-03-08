import React from 'react';
import styled from 'styled-components';

import { Button } from 'components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
`;

const Header = (props) => {
  return (
    <Wrapper>
      <Button onClick={props.loginWithProvider.bind(null, 'google')}>Log In</Button>
      <Button onClick={props.logoutUser.bind(null)}>Log Out</Button>
      <Button>Settings</Button>
      <Button onClick={() => console.log(props, props.currentUser.value)}>{'{...props}'}</Button>
    </Wrapper>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
