import { getIngredients } from '../../services/store/burger-ingredients/actions'
import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import { useAppDispatch } from '../../hooks'
import { useEffect } from 'react'
import styles from './app.module.css'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <AppHeader />
        <h2 className='text text_type_main-large p-5'>Соберите бургер</h2>
        <main className={styles.main}>
          <section className={`${styles.burgerIngredients} pr-4`}>
            <BurgerIngredients />
          </section>
          <section className={styles.burgerConstructor}>
            <BurgerConstructor />
          </section>
        </main>
      </div>
    </div>
  )
}
