import React from 'react'
import styles from './modal-overlay.module.css'

export const ModalOverlay = ({ handleClose, children }: {
    handleClose: () => void
    children?: React.ReactNode,
}) => {

    return (
        <div
            onClick={handleClose}
            className={styles.modalOverlay}
        >
            {children}
        </div>
    )
}
