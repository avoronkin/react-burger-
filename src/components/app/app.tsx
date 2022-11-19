import { READ_INGREDIENTS_URL } from '../../constants'
import { useApi } from '../../hooks'
import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import { LoadingSpinner } from '../loading-spinner'
import styles from './styles.module.css'

export const App = () => {
  const { data: ingredients = [], error, loading } = useApi(READ_INGREDIENTS_URL)
  if (error) {
    throw new Error('Ошибка при получении списка ингридиентов')
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <AppHeader />
        <h2 className='text text_type_main-large p-5'>Соберите бургер</h2>
        <main className={styles.main}>
          {loading ? <LoadingSpinner /> : <>
            <section className={`${styles.burgerIngredients} pr-4`}>
              <BurgerIngredients ingredients={ingredients} />
            </section>
            <section className={styles.burgerConstructor}>
              <BurgerConstructor ingredients={ingredients} />
            </section>
          </>}
        </main>
      </div>
    </div>
  )
}
