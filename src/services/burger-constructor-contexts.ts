import { createContext } from 'react'
import { IIngredient } from '../utils/types'

export interface BurgerConstructorState {
    bunIngredient?: IIngredient
    internalIngredients: IIngredient[]
    orderCost: number
}

export const BurgerConstructorContext = createContext<[BurgerConstructorState]>([{
    internalIngredients: [],
    orderCost: 0
}])

