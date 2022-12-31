import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { burgerConstructorSlice } from './burger-constructor/slice'
import { burgerIngredientsSlice } from './burger-ingredients/slice'
import { combineReducers } from 'redux'
import { ingredientDetailsSlice } from './ingredient-details/slice'
import { orderSlice } from './order/slice'
import { userSlice } from './user/slice'

export const rootReducer = combineReducers({
    [burgerConstructorSlice.name]: burgerConstructorSlice.reducer,
    [burgerIngredientsSlice.name]: burgerIngredientsSlice.reducer,
    [ingredientDetailsSlice.name]: ingredientDetailsSlice.reducer,
    [orderSlice.name]: orderSlice.reducer,
    [userSlice.name]: userSlice.reducer,
})


export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
