import { AppHeader } from '../app-header'
import { BurgerConstructor } from  '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import styles from './styles.module.css'
import { ingredients } from '../../utils/data'

export const App = () => {
  
  return (
      <div className={styles.page}>
        <div className={styles.content}>

          <AppHeader />
          <h2 className='text text_type_main-large p-5'>Соберите бургер</h2>
          <main className={styles.main}>
            <section className={`${styles.burgerIngredients} pr-4`}>
              <BurgerIngredients ingredients={ingredients} />
            </section>
            <section className={styles.burgerConstructor}>
              <BurgerConstructor ingredients={ingredients}/>
            </section>
          </main>
        </div>
      </div>
  )
}
