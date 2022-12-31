import { RootState } from '../index'
import { statePath } from './state'

export const selectIngredientsList = (store: RootState) => store[statePath]
