import {
    Button,
    EmailInput,
    PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { login, loginFormChanged } from '../../store/user/actions'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { ErrorNote } from '../error'
import { HelpLink } from '../help-link/help-link'
import { LoadingSpinner } from '../loading-spinner'
import { ROUTES } from '../../constants'
import { selectLogin } from '../../store/user/selectors'

export const Login = () => {
    const {
        loginForm,
        loginRequest,
        loginError,
        loginFormValid,
    } = useAppSelector(selectLogin)
    const dispatch = useAppDispatch()
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        dispatch(loginFormChanged({ name, value }))
    }

    const onSubmit = () => {
        dispatch(login(loginForm))
    }

    return (
        <>
            <h2 className='text text_type_main-medium'>Вход</h2>
            {loginRequest && <LoadingSpinner text='Авторизуем пользователя'/>}
            {loginError && <ErrorNote>Ошибка при авторизации</ErrorNote>}
            <EmailInput
                name='email'
                value={loginForm.email}
                onChange={onChange}
                isIcon={false}
                extraClass='m-2'
                disabled={loginRequest}
            />
            <PasswordInput
                name='password'
                value={loginForm.password}
                onChange={onChange}
                extraClass='m-2'
                disabled={loginRequest}
            />
            <Button
                htmlType='button'
                type='primary'
                extraClass='mt-2 mb-15'
                size='medium'
                disabled={loginRequest || !loginFormValid}
                onClick={onSubmit}
            >
                Войти
            </Button>

            <HelpLink
                beforeText='Вы - новый пользователь?'
                linkText='Зарегистрироваться'
                to={ROUTES.REGISTER}
            />
            <HelpLink
                beforeText='Забыли пароль?'
                linkText='Восстановить пароль'
                to={ROUTES.FORGOT_PASSWORD}
            />
        </>
    )
}