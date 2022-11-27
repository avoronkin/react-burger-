import { IIngredient } from '../../utils/types'
import { Ingredient } from './ingredient'
import styles from './ingredients.module.css'

export const Ingredients = ({ name, ingredients }: { name: string, ingredients: IIngredient[] }) => {
    return (
        <>
            <h2 className='text text_type_main-medium'>{name}</h2>
            <section className={`${styles.ingredients} pb-10`}>
                {ingredients.map((ingredient) => {
                    return (
                        <Ingredient {...ingredient} key={ingredient._id} />
                    )
                })}
            </section>
        </>
    )
}
