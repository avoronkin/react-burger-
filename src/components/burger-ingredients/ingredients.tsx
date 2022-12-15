import { IIngredient } from '../../types'
import { Ingredient } from './ingredient'
import { setActiveTab } from '../../services/store/burger-ingredients/actions'
import styles from './ingredients.module.css'
import { useAppDispatch } from '../../hooks'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const Ingredients = ({ name, type, ingredients }: {
    name: string
    type: string
    ingredients: IIngredient[]
}) => {
    const dispatch = useAppDispatch()
    const { ref, inView, entry } = useInView({
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    })

    useEffect(() => {
        const intersectionRatio = inView ? entry?.intersectionRatio || 0 : 0
        dispatch(setActiveTab(type, intersectionRatio))
    }, [inView, type, entry, dispatch])

    return (
        <div ref={ref}>
            <h2 className='text text_type_main-medium pt-8'>{name}</h2>
            <section className={`${styles.ingredients}`}>
                {ingredients.map((ingredient) => {
                    return (
                        <Ingredient {...ingredient} key={ingredient._id} />
                    )
                })}
            </section>
        </div>
    )
}
