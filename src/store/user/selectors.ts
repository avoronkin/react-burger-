import {
    emailIsValid, 
    nameIsValid, 
    passwordIsValid, 
    tokenIsValid 
} from './validation'
import { RootState } from '../index'
import { statePath } from './state'

export const selectRegister = (store: RootState) => {
    const {
        registerForm,
        registerRequest,
        registerError,
    } = store[statePath]

    let registerFormValid = true
    if (!nameIsValid(registerForm.name)) {
        registerFormValid = false
    }
    if (!emailIsValid(registerForm.email)) {
        registerFormValid = false
    }
    if (!passwordIsValid(registerForm.password)) {
        registerFormValid = false
    }

    return {
        registerForm,
        registerRequest,
        registerFormValid,
        registerError,
    }
}

export const selectLogin = (store: RootState) => {
    const {
        loginForm,
        loginRequest,
        loginError,
    } = store[statePath]

    let loginFormValid = true
    if (!emailIsValid(loginForm.email)) {
        loginFormValid = false
    }
    if (!passwordIsValid(loginForm.password)) {
        loginFormValid = false
    }

    return {
        loginForm,
        loginRequest,
        loginError,
        loginFormValid,
    }
}

export const selectLogout = (store: RootState) => {
    const {
        logoutRequest,
        logoutError
    } = store[statePath]

    return {
        logoutRequest,
        logoutError,
    }
}

export const selectForgotPassword = (store: RootState) => {
    const {
        forgotPasswordForm,
        forgotPasswordRequest,
        forgotPasswordError,
        forgotPasswordSuccess,
    } = store[statePath]

    let forgotPasswordFormValid = true
    if (!emailIsValid(forgotPasswordForm.email)) {
        forgotPasswordFormValid = false
    }

    return {
        forgotPasswordForm,
        forgotPasswordRequest,
        forgotPasswordError,
        forgotPasswordSuccess,
        forgotPasswordFormValid,
    }
}

export const selectResetPassword = (store: RootState) => {
    const {
        resetPasswordForm,
        resetPasswordRequest,
        resetPasswordError,
    } = store[statePath]

    let resetPasswordFormValid = true
    if (!passwordIsValid(resetPasswordForm.password)) {
        resetPasswordFormValid = false
    }
    if (!tokenIsValid(resetPasswordForm.token)) {
        resetPasswordFormValid = false
    }

    return {
        resetPasswordForm,
        resetPasswordRequest,
        resetPasswordError,
        resetPasswordFormValid,
    }
}

export const selectProfile = (store: RootState) => {
    const {
        user
    } = store[statePath]

    return user
}

export const selectGetUser = (store: RootState) => {
    const {
        getUserRequest,
        getUserError,
    } = store[statePath]

    return {
        getUserRequest,
        getUserError,
    }
}

export const selectUpdateUser = (store: RootState) => {
    const {
        user,
        updateUserForm,
        updateUserRequest,
        updateUserError,
    } = store[statePath]

    const nameChanged = !!(updateUserForm.name !== user?.name)
    const emailChanged = !!(updateUserForm.email !== user?.email)
    const passwordChanged = !!updateUserForm.password
    const updateUserFormChanged = nameChanged || emailChanged || passwordChanged

    const validationErrors = []
    if (!nameIsValid(updateUserForm.name)) {
        validationErrors.push('Ошибка валидации поля Имя.')
    }
    if (!emailIsValid(updateUserForm.email)) {
        validationErrors.push('Ошибка валидации поля E-mail.')
    }
    if (!passwordIsValid(updateUserForm.password)) {
        validationErrors.push('Ошибка валидации поля Пароль.')
    }

    return {
        updateUserForm,
        updateUserFormChanged,
        updateUserFormInvalid: validationErrors.join(' '),
        updateUserRequest,
        updateUserError,
    }
}

export const selectIsAuthenticated = (store: RootState) => {
    return !!store[statePath].user 
}

