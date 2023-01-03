import { BurgerConstructor } from '../../components/burger-constructor'
import { BurgerIngredients } from '../../components/burger-ingredients'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styles from './home.module.css'

export const HomePage = () => {

    return (
        <>
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
        </>
    )
}
