import PropTypes from 'prop-types'
import styles from './modal-overlay.module.css'

export const ModalOverlay = ({ children, isOpen, handleClose }: {
    children?: React.ReactNode,
    isOpen: boolean,
    handleClose: () => void
}) => {
    if (!isOpen) return null

    return (
        <div
            onClick={handleClose}
            className={styles.modalOverlay}
        >
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}
