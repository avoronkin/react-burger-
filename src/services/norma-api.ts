import { BASE_URL } from '../constants'
import { IIngredient } from '../types'

export interface IGetIngredientsListResponse {
    success: boolean
    data: IIngredient[]
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

async function request<T>({ url, method }: { 
    url: string, 
    method: 'GET'|'POST', 
}): Promise<T>
async function request<T, K>({ url, method, body}: { 
    url: string, 
    method: 'GET'|'POST', 
    body?: K
}): Promise<T>
async function request<T, K>({ url, method, body}: { 
    url: string, 
    method: 'GET'|'POST', 
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
    
    return response.json()
}

export async function getIngredientsList(): Promise<IGetIngredientsListResponse> {
    return request<IGetIngredientsListResponse>({
        url: `${BASE_URL}/ingredients`,
        method: 'GET',
    })
}

export async function createOrder(params: ICreateOrderRequest): Promise<ICreateOrderResponse> {
    return request<ICreateOrderResponse, ICreateOrderRequest>({
        url: `${BASE_URL}/orders`,
        method: 'POST',
        body: params,
    })
}

export const normaApi = {
    getIngredientsList, 
    createOrder,
}



