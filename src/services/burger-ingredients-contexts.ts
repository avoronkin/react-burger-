import { createContext } from 'react'
import { IIngredient } from '../utils/types'

export interface BurgerIingredientsState { 
    ingredients: IIngredient[] 
}
export const BurgerIingredientsContext = createContext<[BurgerIingredientsState]>([{ 
    ingredients: [] 
}])
