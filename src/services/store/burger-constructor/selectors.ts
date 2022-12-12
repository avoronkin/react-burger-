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
