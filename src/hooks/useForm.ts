import { useState } from 'react'

interface inputParams<T> {
    initialState: T,
    isValid?: (values: T) => boolean
    handleSubmit?: (values: T) => void
}

interface outputParams<T> {
    values: T,
    isValid: boolean,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void,
    setValues: React.Dispatch<React.SetStateAction<T>>
}

export function useForm<T>({ initialState, isValid, handleSubmit }: inputParams<T>): outputParams<T> {
    const [values, setValues] = useState(initialState)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setValues({ ...values, [name]: value })
    }

    return {
        values,
        isValid: isValid ? isValid(values) : true,
        handleChange,
        handleSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            if (handleSubmit) {
                handleSubmit(values)
            }
        },
        setValues,
    }
}
