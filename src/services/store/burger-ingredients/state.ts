import { IIngredient } from '../../../types'

export interface IBurgerIngredientsState {
    ingredients: IIngredient[]
    ingredientsRequest: boolean
    ingredientsError: boolean
}

export const initialState: IBurgerIngredientsState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: false,
}
