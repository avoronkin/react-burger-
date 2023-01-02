import {
    Redirect,
    Route,
    RouteProps,
} from 'react-router-dom'
import { useAppLocation, useAppSelector } from '../../hooks'
import { ROUTES } from '../../constants'
import { selectIsAuthenticated } from '../../store/user/selectors'

type ProtectedRouteParams = RouteProps & {
    role?: 'user' | 'guest'
}

export const ProtectedRoute = ({ children, role = 'user', ...props }: ProtectedRouteParams) => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated)
    const location = useAppLocation()

    if (role === 'guest' && isAuthenticated) {
        console.log(`authenticated guest, redirecting to ${location?.state?.from || ROUTES.MAIN}, from ${location.pathname}`)
        return (
            <Route {...props}>
                <Redirect to={location?.state?.from || ROUTES.MAIN} />
            </Route>
        )
    }

    if (role === 'user' && !isAuthenticated) {
        console.log(`not authenticated user, redirecting to ${ROUTES.LOGIN}, from ${location.pathname}`)
        return (
            <Route {...props}>
                <Redirect to={{ pathname: ROUTES.LOGIN, state: { from: location } }} />
            </Route>
        )
    }

    console.log(`role ${role} ok`)
    return (<Route {...props}>{children}</Route>)
}
