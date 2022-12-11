import { IIngredient } from '../../../types'

export interface BurgerConstructorState {
    bunIngredient?: IIngredient
    internalIngredients: IIngredient[]
    price: number
    canBeOrdered: boolean
}

export const initialState: BurgerConstructorState = {
    internalIngredients: [],
    price: 0,
    canBeOrdered: false,
}
