import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { forgotPassword, forgotPasswordFormChanged } from '../../store/user/actions'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { ErrorNote } from '../error'
import { HelpLink } from '../help-link/help-link'
import { LoadingSpinner } from '../loading-spinner'
import { ROUTES } from '../../constants'
import { Redirect } from 'react-router-dom'
import { selectForgotPassword } from '../../store/user/selectors'
import styles from './forgot-password.module.css'

export const ForgotPassword = () => {
    const dispatch = useAppDispatch()
    
    const { 
        forgotPasswordForm, 
        forgotPasswordFormValid,
        forgotPasswordRequest,
        forgotPasswordError,
        forgotPasswordSuccess, 
    } = useAppSelector(selectForgotPassword)
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target
        dispatch(forgotPasswordFormChanged({ name, value }))
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(forgotPassword(forgotPasswordForm))
    }
    
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            {forgotPasswordSuccess && <Redirect to={ROUTES.RESET_PASSWORD} /> }
            <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
            {forgotPasswordError && <ErrorNote>Ошибка при сбросе пароля</ErrorNote>}
            {forgotPasswordRequest && <LoadingSpinner text='Сбрасываем пароль'/>}
            <EmailInput
                name='email'
                value={forgotPasswordForm.email}
                onChange={onChange}
                isIcon={false}
                extraClass='m-2'
                placeholder='Укажите e-mail'
                disabled={forgotPasswordRequest}
            />
            <Button 
                htmlType='submit'
                type='primary'
                extraClass='mt-2 mb-15'
                size='medium'
                disabled={forgotPasswordRequest || !forgotPasswordFormValid}
            >
                Восстановить
            </Button>

            <HelpLink 
                beforeText='Вспомнили пароль?'
                linkText='Войти'
                to={ROUTES.LOGIN}
            />
        </form>
    )
}
