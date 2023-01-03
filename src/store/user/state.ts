export interface IUserState {
    user?: {
        email: string
        name: string
    }

    forgotPasswordRequest: boolean
    forgotPasswordError: boolean
    forgotPasswordSuccess: boolean

    resetPasswordRequest: boolean
    resetPasswordError: boolean
    resetPasswordSuccess: boolean
    
    registerRequest: boolean
    registerError: boolean

    loginRequest: boolean
    loginError: boolean

    refreshTokenRequest: boolean
    refreshTokenError: boolean

    logoutRequest: boolean
    logoutError: boolean

    getUserRequest: boolean
    getUserError: boolean

    updateUserRequest: boolean
    updateUserError: boolean
}

export const initialState: IUserState = {
    forgotPasswordRequest: false,
    forgotPasswordError: false,
    forgotPasswordSuccess: false,

    registerRequest: false,
    registerError: false,

    loginRequest: false,
    loginError: false,

    resetPasswordRequest: false,
    resetPasswordError: false,
    resetPasswordSuccess: false,

    refreshTokenRequest: false,
    refreshTokenError: false,

    logoutRequest: false,
    logoutError: false,

    getUserRequest: false,
    getUserError: false,

    updateUserRequest: false,
    updateUserError: false,
}

export const statePath = 'user'
