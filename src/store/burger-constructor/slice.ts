import { initialState, statePath } from './state'
import { createSlice } from '@reduxjs/toolkit'

export const burgerConstructorSlice = createSlice({
    name: statePath,
    initialState,
    reducers: {
        addBurgerIngredient: (state, action) => {
            const { ingredient } = action.payload
            
            if (ingredient.type === 'bun') {
                state.bunIngredient = ingredient
            } else {
                state.internalIngredients.push(ingredient)
            }

        },
        removeBurgerIngredient: (state, action) => {
            const { ingredient } = action.payload

            state.internalIngredients = state.internalIngredients.filter(i => i.uid !== ingredient.uid)
        },
        moveBurgerIngredient: (state, action) => {
            const { newIndex, oldIndex } = action.payload

            state.internalIngredients.splice(newIndex, 0, state.internalIngredients.splice(oldIndex, 1)[0])
        },
        resetBurgerIngredients: () => {
            return initialState
        }
    },
})