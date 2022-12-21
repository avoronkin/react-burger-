import { IResetPasswordRequest, normaApi } from '../../norma-api'
import { AppThunk } from '../index'
export const RESET_PASSWORD_FORM_CHANGE = 'RESET_PASSWORD_FORM_CHANGE'
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR'

export interface ResetPasswordFormChangeAction {
    type: typeof RESET_PASSWORD_FORM_CHANGE
    payload: {
        name: string,
        value: string
    }
}

export const resetPassworFormChange = (name: string, value: string): ResetPasswordFormChangeAction => ({
    type: RESET_PASSWORD_FORM_CHANGE,
    payload: {
        name,
        value,
    }
})

export interface ResetPasswordRequestAction {
    type: typeof RESET_PASSWORD_REQUEST
}
export interface ResetPasswordSuccessAction {
    type: typeof RESET_PASSWORD_SUCCESS
    payload: {
        message: string
    }
}
export interface ResetPasswordErrorAction {
    type: typeof RESET_PASSWORD_ERROR
}
export type ResetPassword = ResetPasswordRequestAction | ResetPasswordSuccessAction | ResetPasswordErrorAction


export function resetPassword(params: IResetPasswordRequest): AppThunk {
    return (dispatch) => {
        dispatch({
            type: RESET_PASSWORD_REQUEST
        })

        normaApi.resetPassword(params)
            .then(res => {
                if (res && res.success) {
                    dispatch({
                        type: RESET_PASSWORD_SUCCESS,
                        payload: {
                            message: res.message
                        }
                    })
                } else {
                    dispatch({
                        type: RESET_PASSWORD_ERROR
                    })
                }
            })
            .catch(() => {
                dispatch({
                    type: RESET_PASSWORD_ERROR
                })
            })
    }
}

export type ResetPasswordAction = ResetPasswordFormChangeAction | ResetPassword