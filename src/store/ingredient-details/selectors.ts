import { RootState } from '../index'
import { statePath } from './state'

export const selectIsIngredientDetailsOpen = (store: RootState) => !!store[statePath].ingredient
export const selectIngredientDetails = (store: RootState) => store[statePath].ingredient
