import {
    ADD_BURGER_INGREDIENT,
    REMOVE_BURGER_INGREDIENT,
    SORT_BURGER_INGREDIENTS,
    RESET_BURGER_INGREDIENTS,
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

            const internalIngredients = [...state.internalIngredients, ingredient]
            return {
                ...state,
                internalIngredients: internalIngredients
            }
        }

        case REMOVE_BURGER_INGREDIENT: {
            const ingredient = action.payload.ingredient
            const internalIngredients = [...state.internalIngredients.filter(i => i.uid !== ingredient.uid)]

            return {
                ...state,
                internalIngredients: internalIngredients,
            }
        }

        case SORT_BURGER_INGREDIENTS: {
            const ingredients = action.payload.ingredients

            return {
                ...state,
                internalIngredients: [...ingredients]
            }
        }

        case RESET_BURGER_INGREDIENTS: {
            return {
                ...initialState
            }
        }

        default:
            return state
    }
}
