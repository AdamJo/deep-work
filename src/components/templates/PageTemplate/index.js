import React, { cloneElement, PropTypes } from 'react';
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
  max-width: 1000px;
`;

const PageTemplate = ({ header, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{cloneElement(header, props)}</Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.any.isRequired,
};

export default PageTemplate;
