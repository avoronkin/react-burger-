import styles from './ingredient-details.module.css'
import { useAppSelector } from '../../hooks'
import { selectIngredientDetails } from '../../services/store/ingredient-details/selectors'

export const IngredientDetails = () => {
    const ingredient = useAppSelector(selectIngredientDetails)

    return (
        <div className={`${styles.ingredientDetailsContent}`}>
            <img alt={ingredient?.name} src={ingredient?.image_large} />
            <h4 className='text text_type_main-medium'>{ingredient?.name}</h4>
            <p className={`${styles.ingredientDetailsDescription} text text_type_main-small p-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <section className={`${styles.params} p-5`}>
                <div>
                    <div className={`${styles.paramsRow} text text_type_main-default text_color_inactive`}>Калории,ккал</div>
                    <div className={`${styles.paramsRow} text text_type_digits-default text_color_inactive`}>{ingredient?.calories}</div>
                </div>
                <div>
                    <div className={`${styles.paramsRow} text text_type_main-default text_color_inactive`}>Белки, г</div>
                    <div className={`${styles.paramsRow} text text_type_digits-default text_color_inactive`}>{ingredient?.proteins}</div>
                </div>
                <div>
                    <div className={`${styles.paramsRow} text text_type_main-default text_color_inactive`}>Жиры, г</div>
                    <div className={`${styles.paramsRow} text text_type_digits-default text_color_inactive`}>{ingredient?.proteins}</div>
                </div>
                <div>
                    <div className={`${styles.paramsRow} text text_type_main-default text_color_inactive`}>Углеводы, г</div>
                    <div className={`${styles.paramsRow} text text_type_digits-default text_color_inactive`}>{ingredient?.carbohydrates}</div>
                </div>
            </section>
        </div>
    )
}
