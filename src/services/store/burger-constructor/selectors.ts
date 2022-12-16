import { RootState } from '../index'

export const selectBurgerBunIngredient = (store: RootState) => store.burgerConstructor.bunIngredient
export const selectBurgerInternalIngredients = (store: RootState) => store.burgerConstructor.internalIngredients
export const selectBurgerIngredients = (store: RootState) => store.burgerConstructor

export const selectDataForOrder = (store: RootState) => {
    const { bunIngredient, internalIngredients } = store.burgerConstructor

    const internalIngredientsCost = internalIngredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
    const bunIngredientCost = bunIngredient ? bunIngredient.price * 2 : 0

    const ingredients = [...internalIngredients.map(i => i._id)]
    if (bunIngredient) {
        ingredients.push(bunIngredient._id)
    }

    return {
        burgerCost: bunIngredientCost + internalIngredientsCost,
        canBeOrdered: bunIngredient && + internalIngredients.length,
        dataForOrder: {
            ingredients
        }
    }
}

export const selectIngredientsCount = (store: RootState) => {
    const { bunIngredient, internalIngredients } = store.burgerConstructor

    const counter: Record<string, number> = {}
    if (bunIngredient) {
        counter[bunIngredient._id] = 2
    }

    internalIngredients.forEach(ingredient => {
        if(!counter[ingredient._id]) {
            counter[ingredient._id] = 0
        }
        counter[ingredient._id] +=1
    })

    return counter
}
