import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';

import { Button, TimeFormat, Modal } from 'components';
import ReactModal from 'react-modal';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  height: 60px;
`;

const ButtonWrapper = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MobileWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    margin: 10px;
  }
`;

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
    this.props.chart.workDates = {};
  }

  logIn() {
    this.props.loginWithProvider('google', this.props.chart);
  }

  getInfo() {
    const path = `/users/${this.props.currentUser.uid}/`;
    this.props.getUserInfo(path, this.props.chart);
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
            ? <MobileWrapper>
                <Button onClick={this.logOut}>Logout</Button>
                {this.props.chart.viewType === 'day'
                  ? <Button onClick={this.openMenu}>Settings</Button>
                  : ''}
                {/*<Button onClick={this.getInfo}>getInfo</Button>*/}
                {/*<Button onClick={this.setInfo}>setInfo</Button>*/}
              </MobileWrapper>
            : <MobileWrapper>
                <Button onClick={this.logIn}>LogIn</Button>
              </MobileWrapper>}
          <Modal
            isOpen={this.props.chart.menu}
            format={this.props.chart.format}
            workDates={this.props.chart.workDates}
            user={this.props.currentUser.uid}
            {...this.props}
          />
        </ButtonWrapper>
      );
    } else {
      return <Button disabled>Loading</Button>;
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
