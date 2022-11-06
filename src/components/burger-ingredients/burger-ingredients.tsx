import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { Ingredients } from './ingredients'
import styles from './styles.module.css'
import { Ingredient } from '../../utils/types'
import { IngredientFC } from './ingredient'
import PropTypes from 'prop-types'

export const BurgerIngredients = ({ ingredients }: { ingredients: Ingredient[] }) => {
    return (
        <div>
            <nav className={`${styles.tabs} pb-5`}>
                <Tab 
                    active={true}
                    value='buh'
                    onClick={()=>{}}
                >
                    Булки
                </Tab>
                <Tab
                    active={false}
                    value='sauce'
                    onClick={()=>{}}
                >
                    Соусы
                </Tab>
                <Tab
                    active={false}
                    value='main'
                    onClick={()=>{}}
                >
                    Начинки
                </Tab>
            </nav>
            <section className={`${styles.ingredientsWrapper} custom-scroll`}>
                <Ingredients 
                    name='Булки' 
                    ingredients={ingredients.filter(i => i.type === 'bun')}
                    />

                <Ingredients 
                    name='Соусы' 
                    ingredients={ingredients.filter(i => i.type === 'sauce')}
                    />
                
                <Ingredients 
                    name='Начинки' 
                    ingredients={ingredients.filter(i => i.type === 'main')}
                    />
            </section>
        </div>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientFC.propTypes)),
}
