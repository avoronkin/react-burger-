import {
    Error404Page,
    ForgotPasswordPage,
    HomePage,
    IngredientDetailsPage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    ResetPasswordPage,
} from '../../pages'
import {
    Route,
    Switch,
} from 'react-router-dom'
import { AppHeader } from '../app-header'
import { ROUTES } from '../../constants'
import styles from './app.module.css'

export const App = () => {

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <AppHeader />
                <Switch>
                    <Route exact={true} path='/' >
                        <HomePage />
                    </Route>
                    <Route path={ROUTES.LOGIN} exact={true}>
                        <LoginPage />
                    </Route>
                    <Route path={ROUTES.REGISTER} exact={true}>
                        <RegisterPage />
                    </Route>
                    <Route path={ROUTES.FORGOT_PASSWORD} exact={true}>
                        <ForgotPasswordPage />
                    </Route>
                    <Route path={ROUTES.RESET_PASSWORD} exact={true}>
                        <ResetPasswordPage />
                    </Route>
                    <Route path={ROUTES.PROFILE} exact={true}>
                        <ProfilePage />
                    </Route>
                    <Route path='/ingredient/:id'>
                        <IngredientDetailsPage />
                    </Route>

                    <Route path="*">
                        <Error404Page />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
