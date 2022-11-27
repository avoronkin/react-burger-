import { useState } from 'react'
import { NormaApi, CreateOrderRequest, CreateOrderResponse } from '../services/norma-api'

export function useCreateOrder(): { createOrder: (params: CreateOrderRequest) => Promise<void>, loading: boolean, response?: CreateOrderResponse, error?: Error } {
    const [response, setResponse] = useState<CreateOrderResponse>()
    const [error, setError] = useState<Error>()
    const [loading, setLoading] = useState(false)

    const createOrder = (params: CreateOrderRequest) => {
        const normaApi = new NormaApi()
    
        setLoading(true)
        return normaApi.createOrder(params)
            .then(setResponse)
            .catch(setError)
            .finally(() => setLoading(false))
    }
    
    return { createOrder, loading, response, error }
}
