
export interface IForgotPasswordState {
    form: {
        fields: {
            email: string
        }
    },
    forgotPasswordRequest: boolean
    forgotPasswordError: boolean
    forgotPasswordResponse?: {
        message: string
    }
}

export const initialState: IForgotPasswordState = {
    form: {
        fields: {
            email: ''
        }
    },
    forgotPasswordRequest: false,
    forgotPasswordError: false,
}