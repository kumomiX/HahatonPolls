import { css } from 'styled-components'

import FuturaPTLight from 'assets/fonts/FuturaPT-Light.woff'
import FuturaPTBook from 'assets/fonts/FuturaPT-Book.woff'
import FuturaPTDemi from 'assets/fonts/FuturaPT-Demi.woff'
import FuturaPTMedium from 'assets/fonts/FuturaPT-Medium.woff'
import FuturaPTBold from 'assets/fonts/FuturaPT-Bold.woff'

export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: 16px;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  @font-face {
    font-family: 'Futura PT';
    font-weight: 300;
    src: url(${FuturaPTLight}) format('woff');
  }

  @font-face {
    font-family: 'Futura PT';
    font-weight: 400;
    src: url(${FuturaPTBook}) format('woff');
  }

  @font-face {
    font-family: 'Futura PT';
    font-weight: 600;
    src: url(${FuturaPTDemi}) format('woff');
  }

  @font-face {
    font-family: 'Futura PT';
    font-weight: 700;
    src: url(${FuturaPTMedium}) format('woff');
  }

  @font-face {
    font-family: 'Futura PT';
    font-weight: 800;
    src: url(${FuturaPTBold}) format('woff');
  }
`
