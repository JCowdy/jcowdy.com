import React from 'react'
import { Home, NotFound } from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
