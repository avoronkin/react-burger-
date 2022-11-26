import PropTypes from 'prop-types'
import {
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerConstructorContext } from '../../services/burger-constructor-contexts'
import { useContext } from 'react'
import styles from './burger-constructor.module.css'

export const BunIngredient = ({ children }: { children?: React.ReactNode }) => {
    const [{ bunIngredient }] = useContext(BurgerConstructorContext)

    return (
        <div className={`${styles.ingridients}`}>
            <div className={`${styles.ingridient} pl-6`}>
                {bunIngredient && <ConstructorElement
                    text={bunIngredient.name}
                    thumbnail={bunIngredient.image}
                    price={bunIngredient.price}
                    type='top'
                    isLocked={true}
                    extraClass={'ml-2'}
                />}
            </div>
            {children}
            <div className={`${styles.ingridient} pl-6`}>
                {bunIngredient && <ConstructorElement
                    text={bunIngredient.name}
                    thumbnail={bunIngredient.image}
                    price={bunIngredient.price}
                    type='bottom'
                    isLocked={true}
                    extraClass={'ml-2'}
                />}
            </div>
        </div>
    )
}

BunIngredient.propTypes = {
    children: PropTypes.node
}
