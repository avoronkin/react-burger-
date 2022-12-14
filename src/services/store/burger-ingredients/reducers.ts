import {
    IngredientsActions,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
    SET_ACTIVE_TAB,
} from './actions'
import { IBurgerIngredientsState, initialState } from './state'

export const burgerIngredientsReducer = (state = initialState, action: IngredientsActions): IBurgerIngredientsState => {
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
        case SET_ACTIVE_TAB: {
            const actionIntersectionRatio = action.payload.intersectionRatio
            const maxIntersectionRatio = Math.max(...state.ingredientTabs.map(t => t.type === action.payload.id ? actionIntersectionRatio : t.intersectionRatio))
            
            return {
                ...state,
                ingredientTabs: state.ingredientTabs.map(t => {
                    const isActionTab = t.type === action.payload.id
                    
                    return {
                        ...t,
                        active: isActionTab ? actionIntersectionRatio === maxIntersectionRatio : t.intersectionRatio === maxIntersectionRatio,
                        intersectionRatio: isActionTab ? actionIntersectionRatio : t.intersectionRatio,
                    }
                }),
            }

        }
        default:
            return state
    }
}
