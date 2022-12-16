import { App } from './components/app'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './services/store'

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
                <App />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
)
