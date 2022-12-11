import { IIngredient } from '../../../types'

export const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT'
export const REMOVE_BURGER_INGREDIENT = 'REMOVE_BURGER_INGREDIENT'

export interface AddBurgerIngredientAction {
    type: typeof ADD_BURGER_INGREDIENT
    payload: {
        ingredient: IIngredient
    }
}

export interface RemoveBurgerIngredientAction {
    type: typeof REMOVE_BURGER_INGREDIENT
    payload: {
        ingredient: IIngredient
    }
}

export type BurgerCostructorActions = AddBurgerIngredientAction | RemoveBurgerIngredientAction

export const addBurgerIngredient = (ingredient: IIngredient): AddBurgerIngredientAction => ({
    type: 'ADD_BURGER_INGREDIENT',
    payload: {
        ingredient,
    }
})

export const removeBurgerIngredient = (ingredient: IIngredient): RemoveBurgerIngredientAction => ({
    type: 'REMOVE_BURGER_INGREDIENT',
    payload: {
        ingredient,
    }
})
