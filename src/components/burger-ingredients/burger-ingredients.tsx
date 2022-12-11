import {
    Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredientTab } from '../../types'
import { Ingredients } from './ingredients'
import { LoadingSpinner } from '../loading-spinner'
import styles from './burger-ingredients.module.css'
import { useAppSelector } from '../../hooks'
import { ingredientsSelector } from '../../services/store/selectors'

export const BurgerIngredients = () => {
    const { ingredients, ingredientsError, ingredientsRequest } = useAppSelector(ingredientsSelector)

    const ingridienTypes: IIngredientTab[] = [
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
            {ingredientsError ? <div>Ошибка при загрузке ингредиентов</div> : null}
            {ingredientsRequest ? <LoadingSpinner /> :
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
                </section>}
        </div>
    )
}
