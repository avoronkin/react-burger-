import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { burgerConstructorReducer } from './burger-constructor/reducers'
import { burgerIngredientsReducer } from './burger-ingredients/reducers'
import { combineReducers } from 'redux'
import { ingredientDetailsReducer } from './ingredient-details/reducers'
import { orderReducer } from './order/reducers'

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    ingredientDetails: ingredientDetailsReducer,
    order: orderReducer
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
