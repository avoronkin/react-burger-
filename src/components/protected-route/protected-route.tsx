import { Redirect, Route } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { ROUTES } from '../../constants'
import { getUser } from '../../store/user/actions'
import { selectIsAuthenticated } from '../../store/user/selectors'
import { useEffect } from 'react'

export const ProtectedRoute = ({ children, path, exact, role = 'user' }: {
    children?: React.ReactNode,
    path: string,
    exact: boolean,
    role?: 'user' | 'guest'
}) => {
    const dispatch = useAppDispatch()
    const isAuthenticated = useAppSelector(selectIsAuthenticated)
    useEffect(() => {
        dispatch(getUser())
    }, [])

    switch (role) {
        case 'user':
            return (
                <Route
                    path={path}
                    exact={exact}
                    render={({ location }) => {
                        return isAuthenticated
                            ? (children)
                            : <Redirect
                                to={{
                                    pathname: ROUTES.LOGIN,
                                    state: { from: location }
                                }} />
                    }}
                />
            )

        default:
            return (
                <Route
                    path={path}
                    exact={exact}
                    render={() => {
                        return !isAuthenticated
                            ? (children)
                            : <Redirect
                                to={{
                                    pathname: ROUTES.MAIN
                                }} />
                    }}
                />
            )

    }
}
