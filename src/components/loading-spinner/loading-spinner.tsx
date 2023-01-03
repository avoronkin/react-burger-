import styles from './loading-spinner.module.css'

export const LoadingSpinner = ({ text }: { text?: string }) => {
    return (
        <div className={styles.spinnerWrapper}>
            <div className={styles.loadingSpinner}></div>
            { text ? <div className='text text_type_main-default ml-2'>{text}</div> : ''}
        </div>
    )
}
