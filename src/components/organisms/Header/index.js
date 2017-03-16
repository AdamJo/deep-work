import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';

import { Button } from 'components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
`;

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.setInfo = this.setInfo.bind(this);
  }

  logOut() {
    this.props.logoutUser();
  }

  logIn() {
    this.props.loginWithProvider('google');
  }

  getInfo() {
    const path = `/users/${this.props.currentUser.uid}/`;
    this.props.getUserInfo(path);
  }
  setInfo() {
    const path = `/users/${this.props.currentUser.uid}/`;
    this.props.setUserInfo(path, this.props.chart);
  }

  renderUserMenu(currentUser) {
    if (currentUser.finished) {
      return (
        <div>
          {currentUser && currentUser.uid
            ? <div>
                <Button onClick={this.logOut}>Logout</Button>
                <Button onClick={this.getInfo}>getInfo</Button>
                <Button onClick={this.setInfo}>setInfo</Button>
              </div>
            : <Button onClick={this.logIn}>LogIn</Button>}
        </div>
      );
    } else {
      return <Button>Loading</Button>;
    }
  }

  render() {
    return (
      <Wrapper {...this.props}>
        {this.renderUserMenu(this.props.currentUser)}
      </Wrapper>
    );
  }
}

Header.propTypes = {
  loginWithProvider: PropTypes.func,
  logoutUser: PropTypes.func,
};

Header.defaultProps = {
  currentUser: {},
};

export default Header;
