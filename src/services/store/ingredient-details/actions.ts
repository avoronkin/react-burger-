import { IIngredient } from '../../../types'

export const ADD_INGREDIENT_DETAILS = 'ADD_INGREDIENT_DETAILS'
export const REMOVE_INGREDIENT_DETAILS = 'REMOVE_INGREDIENT_DETAILS'

export interface AddIngredientDetailsAction {
    type: typeof ADD_INGREDIENT_DETAILS
    ingredient: IIngredient
}

export interface RemoveIngredientDetailsAction {
    type: typeof REMOVE_INGREDIENT_DETAILS
}

export type IngredientDetailsActions = AddIngredientDetailsAction | RemoveIngredientDetailsAction
