import React, { cloneElement, PropTypes, PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  margin: 0;
  width: 100%;
  z-index: 1;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 1000px;
`;

const PageTemplate = class PageTemplate extends PureComponent {
  render() {
    return (
      <Wrapper {...this.props}>
        <Header>{cloneElement(this.props.header, this.props)}</Header>
        <Content>{this.props.children}</Content>
      </Wrapper>
    );
  }
};

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.any.isRequired,
};

export default PageTemplate;
