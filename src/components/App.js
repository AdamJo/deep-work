import React, { PropTypes } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './themes/';
import './themes/global-style';

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.any,
};

export default App;
