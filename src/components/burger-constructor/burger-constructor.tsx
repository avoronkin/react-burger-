import { BunIngredient } from './bun-ingredient'
import { InternalIngredients } from './internal-ingredients'
import { OrderToolbar } from './order-toolbar'

export const BurgerConstructor = () => {
    return (
        <>
            <BunIngredient>
                <InternalIngredients />
            </BunIngredient>
            <OrderToolbar />
        </>
    )
}
