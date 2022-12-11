import { InternalIngredient } from './internal-ingredient'
import { EmptyIngredient } from './empty-ingredient'
import styles from './burger-constructor.module.css'
import { internalIngredientsSelector } from '../../services/store/selectors'
import { useAppSelector } from '../../hooks'

export const InternalIngredients = () => {
    const internalIngredients = useAppSelector(internalIngredientsSelector)

    return (
        <div className={`${styles.ingridientsScrol} custom-scroll`}>
            {!internalIngredients.length && <EmptyIngredient extraClass='ml-8'>Ингредиенты не выбраны</EmptyIngredient>}
            {
                internalIngredients
                    .map((ingredient) => {
                        return (
                            <InternalIngredient ingredient={ingredient} key={ingredient._id}/>
                        )
                    })
            }
        </div>
    )
}
