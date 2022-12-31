import { BASE_URL } from '../constants'
import { IIngredient } from '../types'

async function request<T>({ url, method }: {
    url: string,
    method: 'GET',
    token?: string
}): Promise<T>
async function request<T, K>({ url, method, body }: {
    url: string,
    method: 'POST' | 'PATH',
    body?: K
    token?: string
}): Promise<T>
async function request<T, K>({ url, method, body, token }: {
    url: string,
    method: 'GET' | 'POST' | 'PATH',
    body?: K
    token?: string
}): Promise<T> {
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Referrer-Policy': 'no-referrer',
    })
    if (token) {
        headers.set('Authorization', token)
    }

    const response = await fetch(url, {
        headers,
        method,
        body: body ? JSON.stringify(body) : undefined,
    })

    const json = await response.json()
    if (response.ok) {
        return json
    } else {
        return Promise.reject(new Error(json.message))
    }
}


export interface IGetIngredientsListResponse {
    success: boolean
    data: IIngredient[]
}

export async function getIngredientsList(): Promise<IGetIngredientsListResponse> {
    return request<IGetIngredientsListResponse>({
        url: `${BASE_URL}/ingredients`,
        method: 'GET',
    })
}


export interface ICreateOrderRequest {
    ingredients: Array<IIngredient['_id']>
}

export interface ICreateOrderResponse {
    success: boolean
    name: string
    order: {
        number: number
    }
    message?: string
}

export async function createOrder(params: ICreateOrderRequest, token: string): Promise<ICreateOrderResponse> {
    return request<ICreateOrderResponse, ICreateOrderRequest>({
        url: `${BASE_URL}/orders`,
        method: 'POST',
        body: params,
        token,
    })
}


export interface IForgotPasswordRequest {
    email: string
}

export interface IForgotPasswordResponse {
    success: boolean
    message: string
}

export async function forgotPassword(params: IForgotPasswordRequest): Promise<IForgotPasswordResponse> {
    return request<IForgotPasswordResponse, IForgotPasswordRequest>({
        url: `${BASE_URL}/password-reset`,
        method: 'POST',
        body: params,
    })
}


export interface IResetPasswordRequest {
    password: string
    token: string
}

export interface IResetPasswordResponse {
    success: boolean
    message: string
}

export async function resetPassword(params: IResetPasswordRequest): Promise<IResetPasswordResponse> {
    return request<IResetPasswordResponse, IResetPasswordRequest>({
        url: `${BASE_URL}/password-reset/reset`,
        method: 'POST',
        body: params,
    })
}

export interface IRegisterRequest {
    email: string
    password: string
    name: string
}
export interface IRegisterResponse {
    success: boolean
    user: {
        email: string
        name: string
    },
    accessToken: string
    refreshToken: string
    message?: string
}

export async function register(params: IRegisterRequest): Promise<IRegisterResponse> {
    return request<IRegisterResponse, IRegisterRequest>({
        url: `${BASE_URL}/auth/register`,
        method: 'POST',
        body: params,
    })
}


export interface ILoginRequest {
    email: string
    password: string
}
export interface ILoginResponse {
    success: boolean
    accessToken: string
    refreshToken: string
    user: {
        email: string
        name: string
    }
    message?: string
}
export async function login(params: ILoginRequest): Promise<ILoginResponse> {
    return request<ILoginResponse, ILoginRequest>({
        url: `${BASE_URL}/auth/login`,
        method: 'POST',
        body: params,
    })
}


export interface ILogoutRequest {
    token: string
}
export interface ILogoutResponse {
    success: boolean,
    message?: string
}
export async function logout(params: ILogoutRequest): Promise<ILogoutResponse> {
    return request<ILogoutResponse, ILogoutRequest>({
        url: `${BASE_URL}/auth/logout`,
        method: 'POST',
        body: params,
    })
}

export interface ITokenRefreshRequest {
    token: string
}
export interface ITokenRefreshResponse {
    success: boolean
    accessToken: string
    refreshToken: string
    message?: string
}
export async function refreshToken(params: ITokenRefreshRequest): Promise<ITokenRefreshResponse> {
    return request<ITokenRefreshResponse, ITokenRefreshRequest>({
        url: `${BASE_URL}/auth/token`,
        method: 'POST',
        body: params,
    })
}

export interface IGetUserResponse {
    success: boolean
    user: {
        email: string
        name: string
    }
    message?: string
}

export async function getUser(token: string): Promise<IGetUserResponse> {
    return request<IGetUserResponse>({
        url: `${BASE_URL}/auth/user`,
        method: 'GET',
        token,
    })
}

export interface IUpdateUserRequest {
    email: string
    name: string
    password: string
}
export interface IUpdateUserResponse {
    success: boolean
    user: {
        email: string
        name: string
    }
    message?: string
}
export async function updateUser(params: IUpdateUserRequest, token: string): Promise<IUpdateUserResponse> {
    return request<IUpdateUserResponse, IUpdateUserRequest>({
        url: `${BASE_URL}/auth/user`,
        method: 'PATH',
        body: params,
        token,
    })
}

export const normaApi = {
    getIngredientsList,
    createOrder,
    register,
    login,
    refreshToken,
    logout,
    forgotPassword,
    resetPassword,
    getUser,
    updateUser,
}



