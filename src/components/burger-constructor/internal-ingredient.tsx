import {
    DragIcon,
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../types'
import styles from './burger-constructor.module.css'
import { useAppDispatch } from '../../hooks'
import { removeBurgerIngredient } from '../../services/store/burger-constructor/actions'

export const InternalIngredient = ({ ingredient }: { ingredient: IIngredient }) => {
    const dispatch = useAppDispatch()
    const deleteHandler = () => dispatch(removeBurgerIngredient(ingredient))
    
    return (
        <div className={styles.ingridient}>
            <DragIcon type='primary' />
            <ConstructorElement
                text={ingredient.name}
                thumbnail={ingredient.image}
                price={ingredient.price}
                isLocked={false}
                extraClass={'ml-2'}
                handleClose={deleteHandler}
            />
        </div>
    )
}
