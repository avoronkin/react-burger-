import React from 'react'
import styles from './empty-ingredient.module.css'

export const EmptyIngredient = ({ type, extraClass = '', children }: { type?: 'bottom' | 'top', extraClass?: string, children?: React.ReactNode }) => {

    const posClassName = type && ['top', 'bottom'].includes(type) ? `constructor-element_pos_${type}` : ''

    return (
        <div className={`constructor-element ${extraClass} ${posClassName} ${styles.element}`}>
            <span className={`constructor-element__row ${styles.elementRow}`}>
                {children}
            </span>
        </div>
    )
}
