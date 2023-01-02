import { RootState } from '../index'
import { statePath } from './state'

export const selectRegister = (store: RootState) => {
    const {
        registerRequest,
        registerError,
    } = store[statePath]

    return {
        registerRequest,
        registerError,
    }
}

export const selectLogin = (store: RootState) => {
    const {
        loginRequest,
        loginError,
    } = store[statePath]

    return {
        loginRequest,
        loginError,
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
        forgotPasswordRequest,
        forgotPasswordError,
        forgotPasswordSuccess,
    } = store[statePath]

    return {
        forgotPasswordRequest,
        forgotPasswordError,
        forgotPasswordSuccess,
    }
}

export const selectResetPassword = (store: RootState) => {
    const {
        resetPasswordRequest,
        resetPasswordError,
        resetPasswordSuccess,
    } = store[statePath]

    return {
        resetPasswordRequest,
        resetPasswordError,
        resetPasswordSuccess,
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
        user,
        getUserRequest,
        getUserError,
    } = store[statePath]

    return {
        user,
        getUserRequest,
        getUserError,
    }
}

export const selectUpdateUser = (store: RootState) => {
    const {
        updateUserRequest,
        updateUserError,
    } = store[statePath]

    return {
        updateUserRequest,
        updateUserError,
    }
}

export const selectIsAuthenticated = (store: RootState) => {
    return !!store[statePath].user 
}
