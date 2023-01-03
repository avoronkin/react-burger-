import { initialState, statePath } from './state'
import { createSlice } from '@reduxjs/toolkit'

export const ingredientDetailsSlice = createSlice({
    name: statePath,
    initialState,
    reducers: {
        addIngredientDetails: (state, action) => {
            state.ingredient = action.payload.ingredient
        },
        removeIngredientDetails: (state) => {
            state.ingredient = undefined
        }
    }
})
