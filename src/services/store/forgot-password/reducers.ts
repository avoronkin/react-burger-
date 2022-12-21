import {
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_FORM_CHANGE,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    ForgotPasswordAction,
} from './actions'
import { IForgotPasswordState, initialState } from './state'

export const forgotPassworReducer = (state = initialState, action: ForgotPasswordAction): IForgotPasswordState => {
    switch (action.type) {
        case FORGOT_PASSWORD_FORM_CHANGE:
            return {
                ...state,
                form: {
                    fields: {
                        ...state.form.fields,
                        [action.payload.name]: action.payload.value
                    }
                }
            }
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                forgotPasswordRequest: true,
                forgotPasswordError: false,
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordResponse: {
                    message: action.payload.message
                }
            }
        case FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordError: true,
            }
        default:
            return state
    }
}
