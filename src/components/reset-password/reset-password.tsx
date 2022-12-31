import {
    Button,
    Input,
    PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { resetPassword, resetPasswordFormChanged } from '../../store/user/actions'
import { selectForgotPassword, selectResetPassword } from '../../store/user/selectors'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { ErrorNote } from '../error'
import { HelpLink } from '../help-link/help-link'
import { LoadingSpinner } from '../loading-spinner'
import { ROUTES } from '../../constants'
import { Redirect } from 'react-router-dom'

export const ResetPassword = () => {
    const dispatch = useAppDispatch()

    const { 
        resetPasswordForm, 
        resetPasswordFormValid,
        resetPasswordRequest,
        resetPasswordError,
    } = useAppSelector(selectResetPassword)
    const { forgotPasswordSuccess } = useAppSelector(selectForgotPassword)
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target
        dispatch(resetPasswordFormChanged({ name, value }))
    }

    const onSubmit = () => {
        dispatch(resetPassword(resetPasswordForm))
    }

    return (
        <>
            {!forgotPasswordSuccess && <Redirect to={ROUTES.FORGOT_PASSWORD}/>}
            <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
            {resetPasswordError && <ErrorNote>Ошибка при сбросе пароля</ErrorNote>}
            {resetPasswordRequest && <LoadingSpinner text='Сбрасываем пароль'/> }
            <PasswordInput
                name={'password'}
                value={resetPasswordForm.password}
                onChange={onChange}
                extraClass='m-2'
                placeholder='Введите новый пароль'
                disabled={resetPasswordRequest}
            />
            <Input
                name='token'
                value={resetPasswordForm.token}
                onChange={onChange}
                extraClass='m-2'
                placeholder='Введите код из письма'
                disabled={resetPasswordRequest}
            />
            <Button
                htmlType='button'
                type='primary'
                extraClass='mt-2 mb-15'
                size='medium'
                onClick={onSubmit}
                disabled={resetPasswordRequest || !resetPasswordFormValid}
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