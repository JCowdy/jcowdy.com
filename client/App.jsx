import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home/Home'
// Lazy import other pages
const NotFound = lazy(() => import('./pages/errors/NotFound'))

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </ErrorBoundary>
)

export default App
