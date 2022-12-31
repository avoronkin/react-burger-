import { IIngredient } from '../../types'
import { burgerIngredientsSlice } from './slice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { normaApi } from '../../services/norma-api'

export const { 
    setActiveTab 
} = burgerIngredientsSlice.actions

export const getIngredients = createAsyncThunk<{ ingredients: IIngredient[]}>(
    'burgerIngredients/getIngredients',
    async () => {
        const res = await normaApi.getIngredientsList()

        return {
            ingredients: res.data
        }
    }
)