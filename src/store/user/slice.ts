import { deleteCookie, setCookie  } from '../../services/cookie'
import { 
    forgotPassword,
    getUser,
    login,
    logout,
    refreshToken,
    register,
    resetPassword,
    updateUser,
} from './actions'
import { initialState, statePath } from './state'
import { SESSION_TIME } from '../../constants'
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: statePath,
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.registerRequest = true
                state.registerError = false
            })
            .addCase(register.fulfilled, (state, action) => {
                state.registerRequest = false
                state.registerError = !action.payload.success
                if (action.payload.success) {
                    setCookie('accessToken', action.payload.accessToken, SESSION_TIME)
                    setCookie('refreshToken', action.payload.refreshToken, SESSION_TIME)
                    state.user = action.payload.user
                }
            })
            .addCase(register.rejected, (state) => {
                state.registerRequest = false
                state.registerError = true
            })
            
        builder
            .addCase(login.pending, (state) => {
                state.loginRequest = true
                state.loginError = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loginRequest = false
                state.loginError = !action.payload.success

                if (action.payload.success) {
                    setCookie('accessToken', action.payload.accessToken, SESSION_TIME)
                    setCookie('refreshToken', action.payload.refreshToken, SESSION_TIME)
                    state.user = action.payload.user
                }
            })
            .addCase(login.rejected, (state) => {
                state.loginRequest = false
                state.loginError = true
            })

        builder
            .addCase(refreshToken.pending, (state) => {
                state.refreshTokenRequest = true
                state.refreshTokenError = false
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.refreshTokenRequest = false
                state.refreshTokenError = !action.payload.success
                if (action.payload.success) {
                    setCookie('accessToken', action.payload.accessToken, SESSION_TIME)
                    setCookie('refreshToken', action.payload.refreshToken, SESSION_TIME)
                }
            })
            .addCase(refreshToken.rejected, (state) => {
                state.refreshTokenRequest = false
                state.refreshTokenError = true
            })

        builder
            .addCase(logout.pending, (state) => {
                state.logoutRequest = true
                state.logoutError = false
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.logoutRequest = false
                state.logoutError = !action.payload.success
                if (action.payload.success) {
                    deleteCookie('accessToken')
                    deleteCookie('refreshToken')
                    state.user = undefined
                }
            })
            .addCase(logout.rejected, (state) => {
                state.logoutRequest = false
                state.logoutError = true
            })

        builder
            .addCase(forgotPassword.pending, (state) => {
                state.forgotPasswordRequest = true
                state.forgotPasswordError = false
                state.forgotPasswordSuccess = false
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.forgotPasswordRequest = false
                state.forgotPasswordError = !action.payload.success
                state.forgotPasswordSuccess = action.payload.success
            })
            .addCase(forgotPassword.rejected, (state) => {
                state.forgotPasswordRequest = false
                state.forgotPasswordError = true
            })
            
        builder
            .addCase(resetPassword.pending, (state) => {
                state.resetPasswordRequest = true
                state.resetPasswordError = false
                state.resetPasswordSuccess = false
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.resetPasswordRequest = false
                state.resetPasswordError = !action.payload.success
                state.resetPasswordSuccess = action.payload.success
            })
            .addCase(resetPassword.rejected, (state) => {
                state.resetPasswordRequest = false
                state.resetPasswordError = true
                state.resetPasswordSuccess = false
            })

        builder
            .addCase(getUser.pending, (state) => {
                state.getUserRequest = true
                state.getUserError = false
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.getUserRequest = false
                if (action.payload.success) {
                    state.user = action.payload.user
                }
                state.getUserError = !action.payload.success
            })
            .addCase(getUser.rejected, (state) => {
                state.getUserRequest = false
                state.getUserError = true
            })
  
        builder
            .addCase(updateUser.pending, (state) => {
                state.updateUserRequest = true
                state.updateUserError = false
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.updateUserRequest = false
                if (action.payload.success) {
                    state.user = action.payload.user
                }
                state.updateUserError = !action.payload.success
            })
            .addCase(updateUser.rejected, (state) => {
                state.updateUserRequest = false
                state.updateUserError = true
            })
    }
})
