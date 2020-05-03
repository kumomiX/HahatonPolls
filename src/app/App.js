import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from 'pages/Home'

function App() {
  return (
    <Switch>
      <Route component={HomePage} path="/poll/:poll" />
      <Route component={HomePage} path="/" />
    </Switch>
  )
}

export default App
