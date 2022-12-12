import {
    ADD_INGREDIENT_DETAILS,
    REMOVE_INGREDIENT_DETAILS,
    IngredientDetailsActions,
} from './actions'
import { IngredientDetailsState, initialState } from './state'

export const ingredientDetailsReducer = (state = initialState, action: IngredientDetailsActions): IngredientDetailsState => {

    switch (action.type) {
        case ADD_INGREDIENT_DETAILS:{
            return {
                ...state,
                ingredient: action.payload.ingredient
            }
        }
        case REMOVE_INGREDIENT_DETAILS:{
            return {
                ...state,
                ingredient: undefined
            }
        }
        default:
            return state
    }
}
