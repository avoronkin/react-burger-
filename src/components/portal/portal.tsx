import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({ children, containerId }: { children: ReactNode, containerId: string }) => {
    const element = document.getElementById(containerId)
    if (!element) {
        throw new Error(`Не найден элемент с идентификатором ${containerId}`)
    }

    return createPortal(children, element)
}
