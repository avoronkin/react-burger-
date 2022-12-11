import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
    GetIngredientsAction,
} from './actions'
import { IBurgerIngredientsState, initialState } from './state'

export const burgerIngredientsReducer = (state = initialState, action: GetIngredientsAction): IBurgerIngredientsState => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredients: [],
                ingredientsRequest: true,
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredients: action.payload.ingredients,
                ingredientsRequest: false,
            }
        }
        case GET_INGREDIENTS_ERROR: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsError: true,
            }
        }
        default:
            return state
    }
}
