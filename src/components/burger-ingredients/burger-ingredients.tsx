import { useContext } from 'react'
import {
    Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredientType } from '../../utils/types'
import { Ingredients } from './ingredients'
import { BurgerIingredientsContext } from '../../services/burger-ingredients-contexts'
import styles from './burger-ingredients.module.css'

export const BurgerIngredients = () => {
    const [{ ingredients }] = useContext(BurgerIingredientsContext)
    const ingridienTypes: IIngredientType[] = [
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
                            key={type}
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
                            key={type}
                        />
                    )
                })}
            </section>
        </div>
    )
}
