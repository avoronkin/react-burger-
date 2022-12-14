import {
    CurrencyIcon,
    Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../types'
import { Modal } from '../modal'
import { IngredientDetails } from './ingredient-details'
import styles from './ingredient.module.css'
import { useDrag } from 'react-dnd'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { selectIngredientDetails } from '../../services/store/ingredient-details/selectors'
import { addIngredientDetails, removeIngredientDetails } from '../../services/store/ingredient-details/actions'
import { selectIngredientsCount } from '../../services/store/burger-constructor/selectors'
import { DND_TYPES } from '../../constants'

export const Ingredient = (props: IIngredient) => {
    const dispatch = useAppDispatch()
    const handleOpen = () => dispatch(addIngredientDetails(props))
    const handleClose = () => dispatch(removeIngredientDetails())
    const counter = useAppSelector(selectIngredientsCount)
    const count = counter[props._id] || 0
    const ingredientDetails = useAppSelector(selectIngredientDetails)
    const isOpen = ingredientDetails?._id === props._id

    const [, dragRef] = useDrag(
        () => ({
            type: DND_TYPES.INGREDIENT,
            item: props,
        }),
        []
    )

    return (
        <>
            <div
                ref={dragRef}
                className={`${styles.ingredient} text text_type_main-default`}
                onClick={handleOpen}>
                {count ? <Counter count={count} size='small' extraClass='m-1' /> : null}
                <img alt={props.name} src={props.image} />
                <h3><span className='pr-2'>{props.price}</span><CurrencyIcon type="primary" /></h3>
                <h4>{props.name} </h4>
            </div>
            <Modal
                isOpen={isOpen}
                handleClose={handleClose}
                title='Детали ингридиента'
            >
                <IngredientDetails />
            </Modal>
        </>
    )
}
