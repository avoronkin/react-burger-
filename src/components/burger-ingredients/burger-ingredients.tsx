import { useAppDispatch, useAppSelector } from '../../hooks'
import { useEffect, useRef } from 'react'
import { IngredientDetails } from './ingredient-details'
import { Ingredients } from './ingredients'
import { LoadingSpinner } from '../loading-spinner'
import { Modal } from '../modal'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { getIngredients } from '../../services/store/burger-ingredients/actions'
import { removeIngredientDetails } from '../../services/store/ingredient-details/actions'
import { selectIngredientDetails } from '../../services/store/ingredient-details/selectors'
import { selectIngredientsList } from '../../services/store/burger-ingredients/selectors'
import styles from './burger-ingredients.module.css'

export const BurgerIngredients = () => {
    const {
        ingredientTabs,
        ingredients,
        ingredientsError,
        ingredientsRequest
    } = useAppSelector(selectIngredientsList)

    const dispatch = useAppDispatch()

    const ingredientDetails = useAppSelector(selectIngredientDetails)
    const closeIngredientDetails = () => dispatch(removeIngredientDetails())

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    const itemsRefs = useRef<Record<string, HTMLDivElement>>({})

    const onTabClick = (type: string) => {
        itemsRefs?.current[type]?.scrollIntoView({
            behavior: 'smooth'
        })
    }


    return (
        <div>
            <nav className={`${styles.tabs}`}>
                {ingredientTabs.map(({ type, name, active }) => {
                    return (
                        <Tab
                            key={type}
                            value={type}
                            active={active}
                            onClick={() => onTabClick(type)}
                        >
                            {name}
                        </Tab>
                    )
                })}
            </nav>
            <section className={`${styles.ingredientsWrapper} custom-scroll`}>
                {ingredientsRequest && <LoadingSpinner />}
                {ingredientsError && <div>Ошибка при загрузке ингредиентов</div>}
                {!ingredientsRequest && !ingredientsError && ingredientTabs.map(({ type, name }) => {
                    return (
                        <div
                            key={type}
                            ref={(element) => {
                                if (itemsRefs?.current && element) {
                                    itemsRefs.current[type] = element
                                }
                            }}
                        >
                            <Ingredients
                                name={name}
                                type={type}
                                ingredients={ingredients.filter(i => i.type === type)}
                            />
                        </div>
                    )
                })}
            </section>

            {!!ingredientDetails && <Modal
                handleClose={closeIngredientDetails}
                title='Детали ингридиента'
            >
                <IngredientDetails />
            </Modal>}
        </div>
    )
}
