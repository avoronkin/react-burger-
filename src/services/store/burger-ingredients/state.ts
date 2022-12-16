import { IIngredient, IIngredientTab } from '../../../types'

export interface IBurgerIngredientsState {
    ingredientTabs: IIngredientTab[]
    ingredients: IIngredient[]
    ingredientsRequest: boolean
    ingredientsError: boolean
}

export const initialState: IBurgerIngredientsState = {
    ingredientTabs: [
        {
            type: 'bun',
            name: 'Булки',
            active: true,
            intersectionRatio: 1
        },
        {
            type: 'sauce',
            name: 'Соусы',
            active: false,
            intersectionRatio: 0
        },
        {
            type: 'main',
            name: 'Начинки',
            active: false,
            intersectionRatio: 0
        },
    ],
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: false,
}
