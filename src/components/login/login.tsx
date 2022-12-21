import {
    Button,
    EmailInput,
    PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { HelpLink } from '../help-link/help-link'
import { ROUTES } from '../../constants'

export const Login = () => {
    const email = ''
    const password = ''

    return (
        <>
            <h2 className='text text_type_main-medium'>Вход</h2>
            <EmailInput
                value={email}
                onChange={() => { console.log() }}
                name={'email'}
                isIcon={false}
                extraClass='m-2'
            />
            <PasswordInput
                onChange={() => { console.log() }}
                value={password}
                name={'password'}
                extraClass='m-2'
            />
            <Button
                htmlType='button'
                type='primary'
                extraClass='mt-2 mb-15'
                size='medium'>
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