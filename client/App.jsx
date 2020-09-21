import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import { Home, NotFound } from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </ErrorBoundary>
)

export default App
