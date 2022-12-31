export interface IUserState {
    user?: {
        email: string
        name: string
    }
    // accessToken: string
    // refreshToken: string

    forgotPasswordForm: {
        email: string
    }
    forgotPasswordRequest: boolean
    forgotPasswordError: boolean
    forgotPasswordSuccess: boolean

    registerForm: {
        email: string
        password: string
        name: string
    },
    registerRequest: boolean
    registerError: boolean

    loginForm: {
        password: string
        email: string
    }
    loginRequest: boolean
    loginError: boolean

    resetPasswordForm: {
        password: string
        token: string
    },
    resetPasswordRequest: boolean
    resetPasswordError: boolean
    resetPasswordSuccess: boolean

    refreshTokenRequest: boolean
    refreshTokenError: boolean

    logoutRequest: boolean
    logoutError: boolean

    getUserRequest: boolean
    getUserError: boolean

    updateUserForm: {
        email: string
        name: string
        password: string
    }
    updateUserRequest: boolean
    updateUserError: boolean
}

export const initialState: IUserState = {
    // user: {
    //     email: '',
    //     name: '',
    // },
    // accessToken: '',
    // refreshToken: '',

    forgotPasswordForm: {
        email: '',
    },
    forgotPasswordRequest: false,
    forgotPasswordError: false,
    forgotPasswordSuccess: false,

    registerForm: {
        email: '',
        password: '',
        name: '',
    },
    registerRequest: false,
    registerError: false,

    loginForm: {
        password: '',
        email: '',
    },
    loginRequest: false,
    loginError: false,

    resetPasswordForm: {
        password: '',
        token: '',
    },
    resetPasswordRequest: false,
    resetPasswordError: false,
    resetPasswordSuccess: false,

    refreshTokenRequest: false,
    refreshTokenError: false,

    logoutRequest: false,
    logoutError: false,

    getUserRequest: false,
    getUserError: false,

    updateUserForm: {
        email: '',
        name: '',
        password: '',
    },
    updateUserRequest: false,
    updateUserError: false,
}

export const statePath = 'user'