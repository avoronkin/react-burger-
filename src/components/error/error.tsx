import React from 'react'
import styles from './error.module.css'

export const ErrorNote = ({ children }: { children?: React.ReactNode }) => {

    return (
        <div className={`${styles.error} text text_type_main-default m-3`}>
            {children}
        </div>
    )
}