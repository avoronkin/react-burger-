import { RootState } from './'

export const burgerIngredientsSelector = (store: RootState) => store.burgerIngredients

export const bunSelector = (store: RootState) => store.burgerConstructor.bunIngredient
export const internalIngredientsSelector = (store: RootState) => store.burgerConstructor.internalIngredients
export const burgerSelector = (store: RootState) => store.burgerConstructor
