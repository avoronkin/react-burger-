
import {
    Button,
    EmailInput,
    Input,
    PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { getUser, initProfileEditForm, profileEditFormChanged, updateUser } from '../../store/user/actions'
import { selectGetUser, selectProfile, selectUpdateUser } from '../../store/user/selectors'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { ErrorNote } from '../error'
import { LoadingSpinner } from '../loading-spinner'
import styles from './profile-form.module.css'
import { useEffect } from 'react'

export const ProfileForm = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(selectProfile)
    const { getUserRequest, getUserError } = useAppSelector(selectGetUser)
    const {
        updateUserForm,
        updateUserFormChanged,
        updateUserFormInvalid,
        updateUserRequest,
        updateUserError
    } = useAppSelector(selectUpdateUser)

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    useEffect(() => {
        if (profile) {
            dispatch(initProfileEditForm(profile))
        }
    }, [profile])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        dispatch(profileEditFormChanged({ name, value }))
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(updateUser(updateUserForm))
    }

    const onReset = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (profile) {
            dispatch(initProfileEditForm(profile))
        }
    }

    return (

        <form className={styles.form} onSubmit={onSubmit} onReset={onReset}>
            {getUserRequest && <LoadingSpinner text='Загружаем данные пользователя'/>}
            {getUserError && <ErrorNote>Ошибка при загрузке профиля</ErrorNote>}
            {updateUserRequest && <LoadingSpinner text='Обновляем данные пользователя'/>}
            {updateUserError && <ErrorNote>Ошибка при обноволении профиля</ErrorNote>}
            {updateUserFormChanged && updateUserFormInvalid && <ErrorNote>{updateUserFormInvalid}</ErrorNote>}
            <Input
                name='name'
                value={updateUserForm.name}
                onChange={onChange}
                extraClass='m-2'
                placeholder='Имя'
                disabled={getUserRequest || updateUserRequest}
            />
            <EmailInput
                name='email'
                value={updateUserForm.email}
                onChange={onChange}
                isIcon={false}
                extraClass='m-2'
                disabled={getUserRequest || updateUserRequest}
            />
            <PasswordInput
                name='password'
                value={updateUserForm.password}
                onChange={onChange}
                extraClass='m-2'
                disabled={getUserRequest || updateUserRequest}
            />
            <div>
                <Button
                    htmlType='submit'
                    type='primary'
                    extraClass='mt-2 mb-15 ml-2'
                    size='medium'
                    disabled={getUserRequest || updateUserRequest || !updateUserFormChanged || !!updateUserFormInvalid}
                >
                    Сохранить
                </Button>
                <Button
                    htmlType='reset'
                    type='primary'
                    extraClass='mt-2 mb-15 ml-2'
                    size='medium'
                    disabled={getUserRequest || updateUserRequest || !updateUserFormChanged}
                >
                    Отмена
                </Button>
            </div>
        </form>
    )
}
