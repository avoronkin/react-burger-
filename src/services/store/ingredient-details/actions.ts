import { IIngredient } from '../../../types'

export const ADD_INGREDIENT_DETAILS = 'ADD_INGREDIENT_DETAILS'
export const REMOVE_INGREDIENT_DETAILS = 'REMOVE_INGREDIENT_DETAILS'

export interface AddIngredientDetailsAction {
    type: typeof ADD_INGREDIENT_DETAILS
    payload: {
        ingredient: IIngredient
    }
}

export interface RemoveIngredientDetailsAction {
    type: typeof REMOVE_INGREDIENT_DETAILS
}

export type IngredientDetailsActions = AddIngredientDetailsAction | RemoveIngredientDetailsAction

export const addIngredientDetails = (ingredient: IIngredient): AddIngredientDetailsAction => ({
    type: ADD_INGREDIENT_DETAILS,
    payload: {
        ingredient
    }
})

export const removeIngredientDetails = (): RemoveIngredientDetailsAction => ({
    type: REMOVE_INGREDIENT_DETAILS,
})
