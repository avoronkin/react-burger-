import { useContext } from 'react'
import { BurgerConstructorContext } from '../../services/burger-constructor-contexts'
import { InternalIngredient } from './internal-ingredient'
import styles from './burger-constructor.module.css'

export const InternalIngredients = () => {
    const [{ internalIngredients }] = useContext(BurgerConstructorContext)

    return (
        <div className={`${styles.ingridientsScrol} custom-scroll`}>
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
