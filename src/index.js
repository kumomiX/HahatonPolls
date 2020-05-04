import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import store from 'app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'

import 'index.css'

import globalStyles from './theme/global'
import defaultTheme from './theme/default'
import muiTheme from './theme/mui'

const GlobalStyle = createGlobalStyle(globalStyles)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <MuiThemeProvider theme={muiTheme}>
            <App />
            <GlobalStyle />
          </MuiThemeProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
