import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { normaApi } from '../../norma-api'

export const registerFormChanged = createAction<{ name: string, value: string }>('auth/registerForm/changed')
export const loginFormChanged = createAction<{ name: string, value: string }>('auth/loginForm/changed')
export const forgotPassworFormChanged = createAction<{ name: string, value: string }>('auth/forgotPasswordForm/changed')
export const resetPassworFormChanged = createAction<{ name: string, value: string }>('auth/resetPasswordForm/changed')

export const register = createAsyncThunk('auth/register', normaApi.register)
export const login = createAsyncThunk('auth/login', normaApi.login)
export const refreshToken = createAsyncThunk('auth/refreshToken', normaApi.refreshToken)
export const logout = createAsyncThunk('auth/logout', normaApi.logout)
export const forgotPassword = createAsyncThunk('auth/forgotPassword', normaApi.forgotPassword)
export const resetPassword = createAsyncThunk('auth/resetPassword', normaApi.resetPassword)

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getIngredients: builder.query({
            query: () => ({
                url: '/ingredients',
            }),
        })
    })
})