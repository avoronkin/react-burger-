import {
    Button,
    EmailInput,
    Input,
    PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { HelpLink } from '../help-link/help-link'
import { ROUTES } from '../../constants'

export const Register = () => {
    const name = ''
    const email = ''
    const password = ''

    return (
        <>
            <h2 className='text text_type_main-medium'>Регистрация</h2>
            <Input
                value={name}
                name='name'
                onChange={() => { console.log() }}
                extraClass='m-2'
                placeholder='Имя'
            />
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
                Зарегистрироваться
            </Button>

            <HelpLink
                beforeText='Уже зарегистрированы?'
                linkText='Войти'
                to={ROUTES.LOGIN}
            />
        </>
    )
}