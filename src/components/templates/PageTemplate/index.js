import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  background: red;
  margin: 0;
  width: 100%;
  z-index: 1;
`;

const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`;

const PageTemplate = ({ header, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header header={header}>{header}</Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default PageTemplate;
