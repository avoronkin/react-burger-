import { InternalIngredient } from './internal-ingredient'
import { EmptyIngredient } from './empty-ingredient'
import styles from './burger-constructor.module.css'
import { selectBurgerInternalIngredients } from '../../services/store/burger-constructor/selectors'
import { useAppSelector } from '../../hooks'

export const InternalIngredients = () => {
    const internalIngredients = useAppSelector(selectBurgerInternalIngredients)

    return (
        <div className={`${styles.ingridientsScrol} custom-scroll`}>
            {!internalIngredients.length && <EmptyIngredient extraClass='ml-8'>Ингредиенты не выбраны</EmptyIngredient>}
            {
                internalIngredients
                    .map((ingredient, index) => {
                        return (
                            <InternalIngredient
                                ingredient={ingredient}
                                index={index}
                                key={ingredient.uid}
                            />
                        )
                    })
            }
        </div>
    )
}
