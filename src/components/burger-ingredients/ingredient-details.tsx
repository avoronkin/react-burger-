import { IIngredient } from '../../utils/types'
import styles from './styles.module.css'

export const IngredientDetails = (props: IIngredient) => {
    return (
        <div className={`${styles.ingredientDetailsContent}`}>
            <img alt={props.name} src={props.image_large} />
            <h4 className='text text_type_main-medium'>{props.name}</h4>
            <p className={`${styles.ingredientDetailsdescription} text text_type_main-small p-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <section className={`${styles.params} p-5`}>
                <div>
                    <div className={`${styles.paramsRow} text text_type_main-default text_color_inactive`}>Калории,ккал</div>
                    <div className={`${styles.paramsRow} text text_type_digits-default text_color_inactive`}>{props.calories}</div>
                </div>
                <div>
                    <div className={`${styles.paramsRow} text text_type_main-default text_color_inactive`}>Белки, г</div>
                    <div className={`${styles.paramsRow} text text_type_digits-default text_color_inactive`}>{props.proteins}</div>
                </div>
                <div>
                    <div className={`${styles.paramsRow} text text_type_main-default text_color_inactive`}>Жиры, г</div>
                    <div className={`${styles.paramsRow} text text_type_digits-default text_color_inactive`}>{props.proteins}</div>
                </div>
                <div>
                    <div className={`${styles.paramsRow} text text_type_main-default text_color_inactive`}>Углеводы, г</div>
                    <div className={`${styles.paramsRow} text text_type_digits-default text_color_inactive`}>{props.carbohydrates}</div>
                </div>
            </section>
        </div>
    )
}
