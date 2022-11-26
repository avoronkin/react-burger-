import { useState, useEffect } from 'react'

export function useApi(url: string): { data?: any, error?: Error, loading: boolean } {
    const [data, setData] = useState()
    const [error, setError] = useState<Error>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log('useApi', url)
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (json.success) {
                    setData(json.data)
                } else {
                    setError(new Error('Ошибка при получении данных'))
                }
            })
            .catch(setError)
            .finally(() => setLoading(false))
    }, [url])

    return { data, error, loading }
}
