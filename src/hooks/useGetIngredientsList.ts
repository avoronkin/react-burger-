import { useState, useEffect } from 'react'
import { NormaApi } from '../services/norma-api'
import { IIngredient } from '../utils/types'

export function useGetIngredientsList(): { loading: boolean, ingredients?: IIngredient[], error?: Error } {
    const [ingredients, setIngredients] = useState<IIngredient[]>()
    const [error, setError] = useState<Error>()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const normaApi = new NormaApi()
        
        setLoading(true)
        normaApi.getIngredientsList()
            .then(response => {
                if (!response.success) {
                    setError(new Error('Ошибка при получение списка ингридиентов'))
                } else {
                    setIngredients(response.data)
                }
            })
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { loading, ingredients, error }
}
