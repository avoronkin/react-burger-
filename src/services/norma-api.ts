import { IIngredient } from "../utils/types";
import {
    GET_INGREDIENTS_LIST_URL,
    CREATE_ORDER_URL,
} from '../constants'


export interface CreateOrderRequest {
    ingredients: IIngredient['_id'][]
}

interface NormaResponse {
    success: boolean
}

export interface GetIngredientsListResponse extends NormaResponse {
    data: IIngredient[],
}
export interface CreateOrderResponse extends NormaResponse {
    name: string
    order: {
        number: number
    }
}

export class NormaApi {

    async request<T extends NormaResponse>({ url, method, body}: { 
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

    async getIngredientsList(): Promise<GetIngredientsListResponse> {
        return this.request<GetIngredientsListResponse>({
            url: GET_INGREDIENTS_LIST_URL,
            method: 'GET',
        })
    }

    async createOrder(params: CreateOrderRequest): Promise<CreateOrderResponse> {
        return this.request<CreateOrderResponse>({
            url: CREATE_ORDER_URL,
            method: 'POST',
            body: params
        })
    }
}




