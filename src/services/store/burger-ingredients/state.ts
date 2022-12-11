import { IIngredient, IIngredientTab } from '../../../types'

export interface IBurgerIngredientsState {
    ingredientTypes: IIngredientTab[]
    ingredients: IIngredient[]
    ingredientsRequest: boolean
    ingredientsError: boolean
}

export const initialState: IBurgerIngredientsState = {
    ingredientTypes: [
        {
            type: 'bun',
            name: 'Булки',
            active: true,
        },
        {
            type: 'sauce',
            name: 'Соусы',
            active: false,
        },
        {
            type: 'main',
            name: 'Начинки',
            active: false,
        },
    ],
    ingredients: [],
    ingredientsRequest: false,
    ingredientsError: false,
}
