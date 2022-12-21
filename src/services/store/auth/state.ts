
export interface IForgotPasswordState {
    user: {
        email: string
        name: string
    },
    accessToken: string
    refreshToken: string

    registerForm: {
        email: string
        password: string
        name: string
    }
    forgotPasswordForm: {
        email: string
    }
    resetPasswordForm: {
        password: string
        token: string
    }
    loginForm: {
        email: string
        password: string
    }

    registerRequest: boolean
    registerError: boolean

    forgotPasswordRequest: boolean
    forgotPasswordError: boolean
    forgotPasswordDone: boolean
    
    resetPasswordRequest: boolean
    resetPasswordError: boolean
    resetPasswordDone: boolean
    
    loginRequest: boolean
    loginError: boolean

    refreshTokenRequest: boolean
    refreshTokenError: boolean

    logoutRequest: boolean
    logoutError: boolean

    readProfileRequest: boolean
    readProfileError: boolean

    updateProfileRequest: boolean
    updateProfileError: boolean
}

// export const initialState: IForgotPasswordState = {
//     forgotPasswordForm: {
//         email: ''
//     },
//     forgotPasswordRequest: false,
//     forgotPasswordError: false,
// }