import { AppHeader } from '../app-header'
import { BurgerIngredients } from '../burger-ingredients'
import { BurgerConstructor } from '../burger-constructor'
import styles from './app.module.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const App = () => {

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <AppHeader />
        <h2 className='text text_type_main-large p-5'>Соберите бургер</h2>
        <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
          <section className={`${styles.burgerIngredients} pr-4`}>
            <BurgerIngredients />
          </section>
          <section className={styles.burgerConstructor}>
            <BurgerConstructor />
          </section>
        </DndProvider>
        </main>
      </div>
    </div>
  )
}
