import { BASE_URL } from '../constants'
import { IIngredient } from '../types'

async function request<T>({ url, method }: {
    url: string,
    method: 'GET',
}): Promise<T>
async function request<T, K>({ url, method, body }: {
    url: string,
    method: 'POST',
    body?: K
}): Promise<T>
async function request<T, K>({ url, method, body }: {
    url: string,
    method: 'GET' | 'POST',
    body?: K
}): Promise<T> {
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Referrer-Policy': 'no-referrer',
        },
        method,
        body: body ? JSON.stringify(body) : undefined,
    })

    if (!response.ok) {
        throw new Error(`HTTP status error: ${response.status}`)
    }

    const json = await response.json()
    if (json.success) {
        return json
    } else {
        throw new Error('request error')
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
}

export async function createOrder(params: ICreateOrderRequest): Promise<ICreateOrderResponse> {
    return request<ICreateOrderResponse, ICreateOrderRequest>({
        url: `${BASE_URL}/orders`,
        method: 'POST',
        body: params,
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
    message: string
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
}
export async function refreshToken(params: ITokenRefreshRequest): Promise<ITokenRefreshResponse> {
    return request<ITokenRefreshResponse, ITokenRefreshRequest>({
        url: `${BASE_URL}/auth/token`,
        method: 'POST',
        body: params,
    })
}


export const normaApi = {
    getIngredientsList,
    createOrder,
    forgotPassword,
    resetPassword,
    register,
    login,
    logout,
    refreshToken,
}



