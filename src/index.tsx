import { App } from './components/app'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store'
const ErrorHandler = ({ error }: { error: Error }) => {
    return (
        <div role="alert">
            <p>Произошла ошибка:</p>
            <pre>{error.message}</pre>
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>

        <ErrorBoundary FallbackComponent={ErrorHandler}>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
)
