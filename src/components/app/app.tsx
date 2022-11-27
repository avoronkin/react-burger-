import { BurgerIingredientsContext } from '../../services/burger-ingredients-contexts'
import { BurgerConstructorContext, BurgerConstructorState } from '../../services/burger-constructor-contexts'
import { useMemo } from 'react'
import { useGetIngredientsList } from '../../hooks'
import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import { LoadingSpinner } from '../loading-spinner'
import styles from './app.module.css'
import { IIngredient } from '../../utils/types'

const calculateBurgerConstructorState = (ingredients: IIngredient[], ingredientsNumber: number): BurgerConstructorState => {
  const bunIngredient = ingredients.find(i => i.type === 'bun')
  const internalIngredients = ingredients
    .filter(ingredient => ingredient.type !== 'bun')
    .sort(() => 0.5 - Math.random())
    .slice(0, ingredientsNumber)

  const bunIngredientCost = bunIngredient ? bunIngredient.price * 2 : 0
  const internalIngredientsCost = internalIngredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
  const orderCost = bunIngredientCost + internalIngredientsCost

  return {
    bunIngredient,
    internalIngredients,
    orderCost,
  }
}

export const App = () => {
  const { ingredients = [], error, loading } = useGetIngredientsList()
  if (error) {
    throw new Error('Ошибка при получении списка ингридиентов')
  }
  const burgerIngredientsState = { ingredients }
  
  const ingredientsNumber = Math.floor(Math.random() * 7)
  const burgerConstructorState = useMemo<BurgerConstructorState>(() => calculateBurgerConstructorState(ingredients, ingredientsNumber), [ingredients, ingredientsNumber])

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <AppHeader />
        <h2 className='text text_type_main-large p-5'>Соберите бургер</h2>
        <main className={styles.main}>
          {loading ? <LoadingSpinner /> : <>
            <section className={`${styles.burgerIngredients} pr-4`}>
              <BurgerIingredientsContext.Provider value={[burgerIngredientsState]}>
                <BurgerIngredients />
              </BurgerIingredientsContext.Provider>
            </section>
            <section className={styles.burgerConstructor}>
              <BurgerConstructorContext.Provider value={[burgerConstructorState]}>
                <BurgerConstructor />
              </BurgerConstructorContext.Provider>
            </section>
          </>}
        </main>
      </div>
    </div>
  )
}
