import { useState } from 'react'

export const useToggle = (isOpen: boolean = false): [boolean, () => void] => {
    const [isShowing, setIsShowing] = useState(isOpen)

    function toggle() {
        setIsShowing(!isShowing)
    }

    return [isShowing, toggle]
}
