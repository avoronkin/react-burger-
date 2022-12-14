import { BunIngredient } from './bun-ingredient'
import { InternalIngredients } from './internal-ingredients'
import { OrderToolbar } from './order-toolbar'
import { useDrop } from 'react-dnd'
import { useAppDispatch } from '../../hooks'
import { addBurgerIngredient } from '../../services/store/burger-constructor/actions'
import { IIngredient } from '../../types'
import { DND_TYPES } from '../../constants'

export const BurgerConstructor = () => {
    const dispatch = useAppDispatch()

    const [, dropRef] = useDrop({
        accept: DND_TYPES.INGREDIENT,
        drop: (ingredient: IIngredient) => dispatch(addBurgerIngredient(ingredient))
    })

    return (
        <>
            <div ref={dropRef}>
                <BunIngredient>
                    <InternalIngredients />
                </BunIngredient>
            </div>
            <OrderToolbar />
        </>
    )
}
