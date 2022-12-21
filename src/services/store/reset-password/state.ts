
export interface IResetPasswordState {
    form: {
        fields: {
            password: string
            token: string
        }
    },
    resetPasswordRequest: boolean
    resetPasswordError: boolean
    resetPasswordResponse?: {
        message: string
    }
}

export const initialState: IResetPasswordState = {
    form: {
        fields: {
            password: '',
            token: '',
        }
    },
    resetPasswordRequest: false,
    resetPasswordError: false,
}