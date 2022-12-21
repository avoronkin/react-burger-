import {
    Button,
    Input,
    PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { resetPassworFormChange, resetPassword } from '../../services/store/reset-password/actions'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { HelpLink } from '../help-link/help-link'
import { ROUTES } from '../../constants'
import { Redirect } from 'react-router-dom'
import { selectForgotPassword } from '../../services/store/forgot-password/selectors'
import { selectResetPassword } from '../../services/store/reset-password/selectors'

export const ResetPassword = () => {
    const dispatch = useAppDispatch()

    const { form, resetPasswordRequest } = useAppSelector(selectResetPassword)
    const { forgotPasswordResponse } = useAppSelector(selectForgotPassword)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target
        dispatch(resetPassworFormChange(name, value))
    }

    const handleSubmit = () => {
        dispatch(resetPassword({
            password: form.fields.password,
            token: form.fields.token,
        }))
    }

    return (
        <>
            {!forgotPasswordResponse && <Redirect to={ROUTES.FORGOT_PASSWORD}/>}
            <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
            <PasswordInput
                onChange={handleChange}
                value={form.fields.password}
                name={'password'}
                extraClass='m-2'
                placeholder='Введите новый пароль'
            />
            <Input
                value={form.fields.token}
                name='token'
                onChange={handleChange}
                extraClass='m-2'
                placeholder='Введите код из письма'
            />
            <Button
                htmlType='button'
                type='primary'
                extraClass='mt-2 mb-15'
                size='medium'
                onClick={handleSubmit}
                disabled={resetPasswordRequest}
            >
                Сохранить
            </Button>

            <HelpLink
                beforeText='Вспомнили пароль?'
                linkText='Войти'
                to={ROUTES.LOGIN}
            />
        </>
    )
}