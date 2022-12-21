import { IForgotPasswordRequest, normaApi } from '../../norma-api'
import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

export const forgotPassworFormChange = createAction<{ name: string, value: string }>('auth/forgotPasswordFormChanged')

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (params: IForgotPasswordRequest): Promise<{ message: string }> => {
    const response = await normaApi.forgotPassword(params)

    if (response && response.success) {
        return { 
            message: response.message 
        }
    } else {
        throw new Error()
    }
})