import { IIngredient } from '../../../types'

export interface BurgerConstructorState {
    bunIngredient?: IIngredient
    internalIngredients: IIngredient[]
    price: number
}

export const initialState: BurgerConstructorState = {
    internalIngredients: [],
    price: 0,
}
