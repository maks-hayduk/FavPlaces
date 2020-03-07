import * as styledComponents from 'styled-components';

import { GlobalStyle } from './global';
import { ITheme, theme } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider, theme, GlobalStyle };
