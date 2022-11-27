import {
    DragIcon,
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../utils/types'
import styles from './burger-constructor.module.css'

export const InternalIngredient = ({ ingredient }: { ingredient: IIngredient }) => {

    return (
        <div className={styles.ingridient} key={ingredient._id}>
            <DragIcon type='primary' />
            <ConstructorElement
                text={ingredient.name}
                thumbnail={ingredient.image}
                price={ingredient.price}
                isLocked={false}
                extraClass={'ml-2'}
            />
        </div>
    )
}
