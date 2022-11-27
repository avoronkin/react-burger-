import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Portal } from '../portal'
import { ModalOverlay } from './modal-overlay'
import styles from './modal.module.css'

export const Modal = ({ title, children, isOpen, handleClose }: {
  title?: string
  children?: React.ReactNode,
  isOpen: boolean,
  handleClose: () => void
}) => {
  if (!isOpen) return null

  return (
    <Portal containerId='modals-root'>
      <ModalOverlay
        isOpen={isOpen}
        handleClose={handleClose}>

        <section
          className={`${styles.modal} pt-3 pb-3 pl-4 pr-4`}
          onClick={(e) => { e.stopPropagation() }}
        >
          <header className={`${styles.modalHeader} pb-3`}>
            <h3 className='text text_type_main-medium'>{title}</h3>
            <span className={styles.modalClose} >
              <CloseIcon type="primary" onClick={handleClose} />
            </span>
          </header>
          <main>
            {children}
          </main>
        </section>
      </ModalOverlay>
    </Portal>
  )
}

