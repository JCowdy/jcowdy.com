import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
// Lazy import other pages
const NotFound = lazy(() => import('./pages/errors/NotFound'))

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ErrorBoundary>
)

export default App
