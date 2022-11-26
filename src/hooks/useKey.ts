import { useEffect } from 'react'

export const useKey = (key: string, callback: () => void) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === key) {
            callback()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    })
}
