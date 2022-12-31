import { IIngredient } from '../../types'

export interface IngredientDetailsState {
    ingredient?: IIngredient
}

export const initialState: IngredientDetailsState = {}

export const statePath = 'ingredientDetails'
