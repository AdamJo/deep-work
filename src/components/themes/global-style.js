import { injectGlobal } from 'styled-components';
import theme from 'components/themes';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: ${theme.fonts.primary};
  }
  #app {
    background-color: ${theme.palette.white[1]};
    min-height: 100%;
    min-width: 100%;
  }
`;
