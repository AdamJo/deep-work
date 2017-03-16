import React, { PropTypes, PureComponent, cloneElement } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './themes/';
import './themes/global-style';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    chart: state.chart,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Main = class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.props.fetchUser();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        {cloneElement(this.props.children, this.props)}
      </ThemeProvider>
    );
  }
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

App.propTypes = {
  children: PropTypes.any,
};

export default App;
