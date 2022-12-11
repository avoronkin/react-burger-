import { AppHeader } from '../app-header'
import { BurgerIngredients } from '../burger-ingredients'
import { BurgerConstructor } from '../burger-constructor'
import styles from './app.module.css'

export const App = () => {

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
