import { useToggle } from './useToggle'
import { useKey } from './useKey'
import { useCallback } from 'react'

export const useModal = (isOpen: boolean = false): [boolean, () => void] => {
    const [isModalOpen, toggleModal] = useToggle(isOpen)
    useKey('Escape', useCallback(() => isModalOpen && toggleModal(), [isModalOpen, toggleModal]))

    return [isModalOpen, toggleModal]
}
