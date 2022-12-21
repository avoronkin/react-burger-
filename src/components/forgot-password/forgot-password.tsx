import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { forgotPassworFormChange, forgotPassword } from '../../services/store/forgot-password/actions'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { HelpLink } from '../help-link/help-link'
import { ROUTES } from '../../constants'
import { Redirect } from 'react-router-dom'
import { selectForgotPassword } from '../../services/store/forgot-password/selectors'

export const ForgotPassword = () => {
    const dispatch = useAppDispatch()
    
    const { form, forgotPasswordResponse, forgotPasswordRequest } = useAppSelector(selectForgotPassword)
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target
        dispatch(forgotPassworFormChange(name, value))
    }

    const handleSubmit = () => {
        dispatch(forgotPassword({
            email: form.fields.email
        }))
    }
    
    return (
        <>
            {forgotPasswordResponse?.message && <Redirect to={ROUTES.RESET_PASSWORD} /> }
            <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
            <EmailInput
                value={form.fields.email}
                onChange={handleChange}
                name={'email'}
                isIcon={false}
                extraClass='m-2'
                placeholder='Укажите e-mail'
            />
            <Button 
                htmlType='button'
                type='primary'
                extraClass='mt-2 mb-15'
                size='medium'
                onClick={handleSubmit}
                disabled={forgotPasswordRequest || !form.fields.email}
            >
                Восстановить
            </Button>

            <HelpLink 
                beforeText='Вспомнили пароль?'
                linkText='Войти'
                to={ROUTES.LOGIN}
            />
        </>
    )
}