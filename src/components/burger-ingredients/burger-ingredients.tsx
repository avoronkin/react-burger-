import {
    Tab
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Ingredients } from './ingredients'
import { LoadingSpinner } from '../loading-spinner'
import styles from './burger-ingredients.module.css'
import { useAppSelector } from '../../hooks'
import { selectIngredientsList } from '../../services/store/burger-ingredients/selectors'
import { getIngredients } from '../../services/store/burger-ingredients/actions'
import { useAppDispatch } from '../../hooks'
import { useEffect } from 'react'

export const BurgerIngredients = () => {
    const {
        ingredientTypes,
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
            <nav className={`${styles.tabs} pb-9`}>
                {ingredientTypes.map(({ type, name, active }) => {
                    return (
                        <Tab
                            key={type}
                            value={type}
                            active={active}
                            onClick={() => {}}
                        >
                            {name}
                        </Tab>
                    )
                })}
            </nav>
            <section className={`${styles.ingredientsWrapper} custom-scroll`}>
                {ingredientsRequest && <LoadingSpinner />}
                {ingredientsError && <div>Ошибка при загрузке ингредиентов</div>}
                {!ingredientsRequest && !ingredientsError && ingredientTypes.map(({ type, name }) => {
                    return (
                        <Ingredients
                            name={name}
                            key={type}
                            ingredients={ingredients.filter(i => i.type === type)}
                        />
                    )
                })}
            </section>
        </div>
    )
}
