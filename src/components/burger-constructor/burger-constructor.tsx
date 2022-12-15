import { BunIngredient } from './bun-ingredient'
import { DND_TYPES } from '../../constants'
import { IIngredient } from '../../types'
import { InternalIngredients } from './internal-ingredients'
import { OrderToolbar } from './order-toolbar'
import { addBurgerIngredient } from '../../services/store/burger-constructor/actions'
import { useAppDispatch } from '../../hooks'
import { useDrop } from 'react-dnd'

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
