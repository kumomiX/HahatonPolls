import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from 'pages/Home'

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage}></Route>
    </Switch>
  )
}

export default App
