import { IIngredient } from '../../../types'
import { v4 as uuidv4 } from 'uuid'
export const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT'
export const REMOVE_BURGER_INGREDIENT = 'REMOVE_BURGER_INGREDIENT'
export const SORT_BURGER_INGREDIENTS = 'SORT_BURGER_INGREDIENTS'
export const RESET_BURGER_INGREDIENTS = 'RESET_BURGER_INGREDIENTS'

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

export interface SortBurgerIngredientsAction {
    type: typeof SORT_BURGER_INGREDIENTS
    payload: {
        ingredients: IIngredient[]
    }
}

export interface ResetBurgerIngredientsAction {
    type: typeof RESET_BURGER_INGREDIENTS
}

export type BurgerCostructorActions = AddBurgerIngredientAction | RemoveBurgerIngredientAction | SortBurgerIngredientsAction | ResetBurgerIngredientsAction

export const addBurgerIngredient = (ingredient: IIngredient): AddBurgerIngredientAction => ({
    type: 'ADD_BURGER_INGREDIENT',
    payload: {
        ingredient: {
            ...ingredient,
            uid: uuidv4(),
        }
    }
})

export const removeBurgerIngredient = (ingredient: IIngredient): RemoveBurgerIngredientAction => ({
    type: 'REMOVE_BURGER_INGREDIENT',
    payload: {
        ingredient,
    }
})

export const sortBurgerIngredients = (ingredients: IIngredient[]): SortBurgerIngredientsAction => ({
    type: 'SORT_BURGER_INGREDIENTS',
    payload: {
        ingredients,
    }
})

export const resetBurgerIngredients = (): ResetBurgerIngredientsAction => ({
    type: 'RESET_BURGER_INGREDIENTS',
})

