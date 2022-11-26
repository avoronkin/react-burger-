import { BurgerIingredientsContext } from '../../services/burger-ingredients-contexts'
import { BurgerConstructorContext } from '../../services/burger-constructor-contexts'
import { useGetIngredientsList } from '../../hooks'
import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import { LoadingSpinner } from '../loading-spinner'
import styles from './app.module.css'

export const App = () => {
  const { ingredients = [], error, loading } = useGetIngredientsList()
  if (error) {
    throw new Error('Ошибка при получении списка ингридиентов')
  }
  const burgerIngredientsState = { ingredients }

  const bunIngredient = ingredients.find(i => i.type === 'bun')
  const internalIngredients = ingredients
    .filter(ingredient => ingredient.type !== 'bun')
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 7))

  const bunIngredientCost = bunIngredient ? bunIngredient.price * 2 : 0
  const internalIngredientsCost = internalIngredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
  const orderCost = bunIngredientCost + internalIngredientsCost

  const burgerConstructorState = {
    bunIngredient,
    internalIngredients,
    orderCost,
  }

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
