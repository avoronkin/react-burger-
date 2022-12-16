import { RootState } from '../index'

export const selectIsIngredientDetailsOpen = (store: RootState) => !!store.ingredientDetails.ingredient
export const selectIngredientDetails = (store: RootState) => store.ingredientDetails.ingredient
