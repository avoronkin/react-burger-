import { createPortal } from 'react-dom'
import { ReactNode } from 'react'

export const Portal = ({ children, containerId }: { children: ReactNode, containerId: string }) => {
    const element = document.getElementById(containerId)
    if (!element) {
        throw new Error(`Не найден элемент с идентификатором ${containerId}`)
    }

    return createPortal(children, element)
}
