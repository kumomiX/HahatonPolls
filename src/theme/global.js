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
`
