import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { App } from './components/app'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const ErrorHandler = ({ error }: { error: Error }) => {
  return (
    <div role="alert">
      <p>Произошла ошибка:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
