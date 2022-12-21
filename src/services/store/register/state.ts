
export interface IRegisterState {
    form: {
        fields: {
            email: string
            password: string
            name: string
        }
    },
    registerRequest: boolean
    registerError: boolean
    registerResponse?: {
        success: boolean
        user: {
            email: string
            name: string
        },
        accessToken: string
        refreshToken: string
    }
}

export const initialState: IRegisterState = {
    form: {
        fields: {
            email: '',
            password: '',
            name: ''
        }
    },
    registerRequest: false,
    registerError: false,
}