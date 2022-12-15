import {
    Counter,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { DND_TYPES } from '../../constants'
import { IIngredient } from '../../types'
import { addIngredientDetails } from '../../services/store/ingredient-details/actions'
import { selectIngredientsCount } from '../../services/store/burger-constructor/selectors'
import styles from './ingredient.module.css'
import { useDrag } from 'react-dnd'

export const Ingredient = (props: IIngredient) => {
    const dispatch = useAppDispatch()
    const openIngredientDetails = () => dispatch(addIngredientDetails(props))

    const counter = useAppSelector(selectIngredientsCount)
    const count = counter[props._id] || 0

    const [, dragRef] = useDrag(
        () => ({
            type: DND_TYPES.INGREDIENT,
            item: props,
        }),
        []
    )

    return (
        <div
            ref={dragRef}
            className={`${styles.ingredient} text text_type_main-default`}
            onClick={openIngredientDetails}>
            {count ? <Counter count={count} size='small' extraClass='m-1' /> : null}
            <img alt={props.name} src={props.image} />
            <h3><span className='pr-2'>{props.price}</span><CurrencyIcon type="primary" /></h3>
            <h4>{props.name} </h4>
        </div>
    )
}
