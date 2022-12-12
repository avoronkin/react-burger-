import { RootState } from '../index'

export const selectIngredientsList = (store: RootState) => store.burgerIngredients
