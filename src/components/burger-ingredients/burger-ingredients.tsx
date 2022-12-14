import {
    Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Ingredients } from './ingredients'
import { LoadingSpinner } from '../loading-spinner'
import styles from './burger-ingredients.module.css'
import { selectIngredientsList } from '../../services/store/burger-ingredients/selectors'
import { getIngredients } from '../../services/store/burger-ingredients/actions'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { useEffect } from 'react'

export const BurgerIngredients = () => {
    const {
        ingredientTabs,
        ingredients,
        ingredientsError,
        ingredientsRequest
    } = useAppSelector(selectIngredientsList)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    return (
        <div>
            <nav className={`${styles.tabs}`}>
                {ingredientTabs.map(({ type, name, active }, index) => {
                    return (
                        <Tab
                            key={type}
                            value={type}
                            active={active}
                            onClick={() => { }}
                        >
                            {name}
                        </Tab>
                    )
                })}
            </nav>
            <section className={`${styles.ingredientsWrapper} custom-scroll`}>
                {ingredientsRequest && <LoadingSpinner />}
                {ingredientsError && <div>Ошибка при загрузке ингредиентов</div>}
                {!ingredientsRequest && !ingredientsError && ingredientTabs.map(({ type, name }, index) => {
                    return (
                        <Ingredients
                            name={name}
                            type={type}
                            key={type}
                            ingredients={ingredients.filter(i => i.type === type)}
                        />
                    )
                })}
            </section>
        </div>
    )
}
