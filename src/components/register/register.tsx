import {
    Button,
    EmailInput,
    Input,
    PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { register, registerFormChanged } from '../../store/user/actions'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { ErrorNote } from '../error'
import { HelpLink } from '../help-link/help-link'
import { LoadingSpinner } from '../loading-spinner'
import { ROUTES } from '../../constants'
import { selectRegister } from '../../store/user/selectors'

export const Register = () => {
    const {
        registerForm,
        registerRequest,
        registerFormValid,
        registerError,
    } = useAppSelector(selectRegister)
    const dispatch = useAppDispatch()

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        dispatch(registerFormChanged({ name, value }))
    }

    const onSubmit = () => {
        dispatch(register(registerForm))
    }

    return (
        <>
            <h2 className='text text_type_main-medium'>Регистрация</h2>
            {registerRequest && <LoadingSpinner text='Создаём пользователя' />}
            {registerError && <ErrorNote>Ошибка при создании пользователя</ErrorNote>}
            <Input
                name='name'
                value={registerForm.name}
                onChange={onChange}
                extraClass='m-2'
                placeholder='Имя'
                disabled={registerRequest}
            />
            <EmailInput
                name='email'
                value={registerForm.email}
                onChange={onChange}
                isIcon={false}
                extraClass='m-2'
                disabled={registerRequest}
            />
            <PasswordInput
                name='password'
                value={registerForm.password}
                onChange={onChange}
                extraClass='m-2'
                disabled={registerRequest}
            />
            <Button
                htmlType='button'
                type='primary'
                extraClass='mt-2 mb-15'
                size='medium'
                disabled={registerRequest || !registerFormValid}
                onClick={onSubmit}
            >
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
