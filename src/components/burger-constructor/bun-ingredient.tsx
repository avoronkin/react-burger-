import {
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { EmptyIngredient } from './empty-ingredient'
import { useAppSelector } from '../../hooks'
import { selectBurgerBunIngredient } from '../../services/store/burger-constructor/selectors'
import styles from './burger-constructor.module.css'


export const BunIngredient = ({ children }: { children?: React.ReactNode }) => {
    const bunIngredient = useAppSelector(selectBurgerBunIngredient)
    const emptyText = 'Булка на выбрана'

    return (
        <div className={`${styles.ingridients}`}>
            <div className={`${styles.ingridient} pl-6`}>
                {!bunIngredient && <EmptyIngredient type='top' extraClass='ml-2'>{emptyText}</EmptyIngredient>}
                {bunIngredient && <ConstructorElement
                    text={bunIngredient.name}
                    thumbnail={bunIngredient.image}
                    price={bunIngredient.price}
                    type='top'
                    isLocked={true}
                    extraClass='ml-2'
                />}
            </div>
            {children}
            <div className={`${styles.ingridient} pl-6`}>
                {!bunIngredient && <EmptyIngredient type='bottom' extraClass='ml-2'>{emptyText}</EmptyIngredient>}
                {bunIngredient && <ConstructorElement
                    text={bunIngredient.name}
                    thumbnail={bunIngredient.image}
                    price={bunIngredient.price}
                    type='bottom'
                    isLocked={true}
                    extraClass='ml-2'
                />}
            </div>
        </div>
    )
}
