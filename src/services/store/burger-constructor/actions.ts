import { IIngredient } from '../../../types'
import { v4 as uuidv4 } from 'uuid'
export const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT'
export const REMOVE_BURGER_INGREDIENT = 'REMOVE_BURGER_INGREDIENT'
export const MOVE_BURGER_INGREDIENT = 'MOVE_BURGER_INGREDIENT'
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

export interface MoveBurgerIngredientAction {
    type: typeof MOVE_BURGER_INGREDIENT
    payload: {
        newIndex: number
        oldIndex: number
    }
}

export interface ResetBurgerIngredientsAction {
    type: typeof RESET_BURGER_INGREDIENTS
}

export type BurgerCostructorActions = AddBurgerIngredientAction | RemoveBurgerIngredientAction | MoveBurgerIngredientAction | ResetBurgerIngredientsAction

export const addBurgerIngredient = (ingredient: IIngredient): AddBurgerIngredientAction => ({
    type: ADD_BURGER_INGREDIENT,
    payload: {
        ingredient: {
            ...ingredient,
            uid: uuidv4(),
        }
    }
})

export const removeBurgerIngredient = (ingredient: IIngredient): RemoveBurgerIngredientAction => ({
    type: REMOVE_BURGER_INGREDIENT,
    payload: {
        ingredient,
    }
})

export const moveBurgerIngredient = (newIndex: number, oldIndex: number): MoveBurgerIngredientAction => ({
    type: MOVE_BURGER_INGREDIENT,
    payload: {
        newIndex,
        oldIndex,
    }
})

export const resetBurgerIngredients = (): ResetBurgerIngredientsAction => ({
    type: RESET_BURGER_INGREDIENTS,
})

