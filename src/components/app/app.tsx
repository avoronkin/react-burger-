import React from 'react';
import { AppHeader } from '../app-header/app-header'
import { BurgerConstructor } from  '../burger-constructor/burger-constructor'
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients'
import styles from './styles.module.css'

function App() {
  
  return (
      <div className={styles.app}>
        <div style={{width: '80%'}}>

          <AppHeader />
          <h2 className='text text_type_main-large p-5'>Соберите бургер</h2>
          <main style={{display: 'flex'}}>
            <section className='pr-4' style={{flex: '50%'}}>
              <BurgerIngredients />
            </section>
            <section style={{flex: '50%'}}>
              <BurgerConstructor />
            </section>

          </main>
        </div>
      </div>
  );
}

export default App;
