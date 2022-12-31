import { useAppDispatch, useAppSelector } from '../../hooks'
import { ErrorNote } from '../error'
import { LoadingSpinner } from '../loading-spinner'
import { logout } from '../../store/user/actions'
import { selectLogout } from '../../store/user/selectors'
import { useEffect } from 'react'

export const Logout = () => {
    const dispatch = useAppDispatch()
    const { logoutRequest, logoutError } = useAppSelector(selectLogout)

    useEffect(() => {
        dispatch(logout())
    }, [])

    return (
        <>
            {logoutRequest && <LoadingSpinner text='Выходим из профиля'/>}
            {logoutError && <ErrorNote>Ошибка при выходе из профиля</ErrorNote>}
        </>
    )

}