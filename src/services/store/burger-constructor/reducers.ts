import {
    ADD_BURGER_INGREDIENT,
    REMOVE_BURGER_INGREDIENT,
    BurgerCostructorActions 
} from './actions'
import { 
    BurgerConstructorState, 
    initialState 
} from './state'

export const burgerConstructorReducer = (state = initialState, action: BurgerCostructorActions): BurgerConstructorState => {
    switch (action.type) {
        case ADD_BURGER_INGREDIENT: {
            const ingredient = action.payload.ingredient
            
            if (ingredient.type === 'bun') {
                return {
                    ...state,
                    bunIngredient: ingredient
                }
            }

            return {
                ...state,
                internalIngredients: [...state.internalIngredients, ingredient]
            }
        }

        case REMOVE_BURGER_INGREDIENT: {
            const ingredient = action.payload.ingredient
            return {
                ...state,
                internalIngredients: [...state.internalIngredients.filter(i => i._id !== ingredient._id)]
            }
        }

        default:
            return state
    }
}
