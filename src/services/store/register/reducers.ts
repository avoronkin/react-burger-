import { IResetPasswordState, initialState } from './state'
import {
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_FORM_CHANGE,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    ResetPasswordAction,
} from './actions'

export const resetPasswordReducer = (state = initialState, action: ResetPasswordAction): IResetPasswordState => {
    switch (action.type) {
        case RESET_PASSWORD_FORM_CHANGE:
            return {
                ...state,
                form: {
                    fields: {
                        ...state.form.fields,
                        [action.payload.name]: action.payload.value
                    }
                }
            }
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                resetPasswordRequest: true,
                resetPasswordError: false,
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordResponse: {
                    message: action.payload.message
                }
            }
        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordError: true,
            }
        default:
            return state
    }
}
