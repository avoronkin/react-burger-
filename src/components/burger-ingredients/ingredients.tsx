import styles from './styles.module.css'
import { Ingredient } from '../../utils/types'
import { IngredientFC } from './ingredient'
import PropTypes from 'prop-types'

export const Ingredients = (props: { name: string, ingredients: Ingredient[] }) => {
    return (
        <>
            <h2 className='text text_type_main-medium'>{props.name}</h2>
            <section className={`${styles.ingredients} pb-10`}>
                {props.ingredients.map((ingredient) => {
                    return (
                        <IngredientFC {...ingredient} key={ingredient._id} />
                    )
                })}
            </section>
        </>
    )
}

Ingredients.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientFC.propTypes)),
}
