import {
    ADD_BURGER_INGREDIENT,
    REMOVE_BURGER_INGREDIENT,
    MOVE_BURGER_INGREDIENT,
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

        case MOVE_BURGER_INGREDIENT: {
            const { newIndex, oldIndex } = action.payload
            const { internalIngredients } = state

            const arr = [...internalIngredients]
            arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])

            return {
                ...state,
                internalIngredients: arr
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
