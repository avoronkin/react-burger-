import PropTypes from 'prop-types'
import {
    Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../utils/types'
import { Ingredients } from './ingredients'
import { Ingredient } from './ingredient'
import styles from './styles.module.css'

export const BurgerIngredients = ({ ingredients }: { ingredients: IIngredient[] }) => {
    const ingridienTypes = [
        {
            type: 'bun',
            name: 'Булки',
            active: true,
        },
        {
            type: 'sauce',
            name: 'Соусы',
            active: false,
        },
        {
            type: 'main',
            name: 'Начинки',
            active: false,
        },
    ]

    return (
        <div>
            <nav className={`${styles.tabs} pb-9`}>
                {ingridienTypes.map(({ type, name, active }) => {
                    return (
                        <Tab
                            active={active}
                            value={type}
                            onClick={() => { }}
                        >
                            {name}
                        </Tab>
                    )
                })}
            </nav>
            <section className={`${styles.ingredientsWrapper} custom-scroll`}>
                {ingridienTypes.map(({ type, name }) => {
                    return (
                        <Ingredients
                            name={name}
                            ingredients={ingredients.filter(i => i.type === type)}
                        />
                    )
                })}
            </section>
        </div>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape(Ingredient.propTypes)),
}
