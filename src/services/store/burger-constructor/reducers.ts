import {
    ADD_BURGER_INGREDIENT,
    REMOVE_BURGER_INGREDIENT,
    BurgerCostructorActions 
} from './actions'
import { 
    BurgerConstructorState, 
    initialState 
} from './state'
import { IIngredient } from '../../../types'


export const burgerConstructorReducer = (state = initialState, action: BurgerCostructorActions): BurgerConstructorState => {
    switch (action.type) {
        case ADD_BURGER_INGREDIENT: {
            const ingredient = action.payload.ingredient
            
            if (ingredient.type === 'bun') {
                return {
                    ...state,
                    price: calculatePrice({ 
                        internalIngredients: state.internalIngredients, 
                        bunIngredient: ingredient 
                    }),
                    canBeOrdered: calculateCanBeOrdered({
                        internalIngredients: state.internalIngredients, 
                        bunIngredient: ingredient  
                    }),
                    bunIngredient: ingredient
                }
            }

            const internalIngredients = [...state.internalIngredients, ingredient]
            return {
                ...state,
                price: calculatePrice({ 
                    bunIngredient: state.bunIngredient,
                    internalIngredients, 
                }),
                canBeOrdered: calculateCanBeOrdered({
                    bunIngredient: state.bunIngredient,
                    internalIngredients, 
                }),
                internalIngredients: internalIngredients
            }
        }

        case REMOVE_BURGER_INGREDIENT: {
            const ingredient = action.payload.ingredient
            const internalIngredients = [...state.internalIngredients.filter(i => i._id !== ingredient._id)]
            
            return {
                ...state,
                price: calculatePrice({ 
                    bunIngredient: state.bunIngredient,
                    internalIngredients, 
                }),
                canBeOrdered: calculateCanBeOrdered({
                    bunIngredient: state.bunIngredient,
                    internalIngredients, 
                }),
                internalIngredients: internalIngredients,
            }
        }

        default:
            return state
    }
}

function calculatePrice({internalIngredients, bunIngredient}: {internalIngredients: IIngredient[], bunIngredient?: IIngredient}):number {
    const internalIngredientsPrice = internalIngredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
    const bunIngredientPrice = bunIngredient ? bunIngredient.price : 0
    
    return internalIngredientsPrice + bunIngredientPrice
}

function calculateCanBeOrdered({internalIngredients, bunIngredient}: {internalIngredients: IIngredient[], bunIngredient?: IIngredient}):boolean {
    return !!(bunIngredient && internalIngredients.length)
}
