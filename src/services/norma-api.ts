import { 
    IIngredient
} from '../types'
import {
    GET_INGREDIENTS_LIST_URL,
    CREATE_ORDER_URL,
} from '../constants'

export interface IGetIngredientsListResponse {
    success: boolean
    data: IIngredient[]
}

export interface ICreateOrderRequest {
    ingredients: IIngredient['_id'][]
}

export interface ICreateOrderResponse {
    success: boolean
    name: string
    order: {
        number: number
    }
}

async function request<T>({ url, method, body}: { 
    url: string, 
    method: 'GET'|'POST', 
    body?: any
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
        url: GET_INGREDIENTS_LIST_URL,
        method: 'GET',
    })
}

export async function createOrder(params: ICreateOrderRequest): Promise<ICreateOrderResponse> {
    return request<ICreateOrderResponse>({
        url: CREATE_ORDER_URL,
        method: 'POST',
        body: params,
    })
}

export const normaApi = {
    getIngredientsList, 
    createOrder,
}



