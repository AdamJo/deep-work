import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';

import { Button, TimeFormat, MenuOptions } from 'components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 60px;
`;

const ButtonWrapper = styled.div`
  min-width: 600px;
  display: flex;
  justify-content: center;
`

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.openMenu = this.openMenu.bind(this);
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

  openMenu() {
    this.props.toggleMenu();
  }

  renderUserMenu(currentUser) {
    if (currentUser.finished) {
      return (
        <ButtonWrapper>
          {currentUser && currentUser.uid
            ?
            <div>
                <Button onClick={this.logOut}>Logout</Button>
                {/*<Button onClick={this.getInfo}>getInfo</Button>
                <Button onClick={this.setInfo}>setInfo</Button>*/}
              </div>
            : <div><Button onClick={this.logIn}>LogIn</Button></div>
          }
          <TimeFormat
            updateTimeFormat={this.props.updateTimeFormat}
            format={this.props.chart.format === '12' ? true : false}
          />

        </ButtonWrapper>
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
