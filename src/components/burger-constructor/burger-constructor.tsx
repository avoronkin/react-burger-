import {
    DragIcon,
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles.module.css'
import { Ingredient } from '../../utils/types'
import PropTypes from 'prop-types'

export const BurgerConstructor = ({ ingredients }: { ingredients: Ingredient[] }) => {
    return (
        <>
            <div className={`${styles.ingridients} custom-scroll`}>

                {ingredients.map((ingredient, index, array) => {
                    const type = index === 0 ? 'top' : (index === array.length - 1) ? 'bottom' : undefined
                    const extraClass = type ? 'pl-6' : ''

                    return (
                        <div className={`${extraClass} ${styles.ingridient}`} key={ingredient._id}>
                            {!type && <DragIcon type='primary' />}
                            <ConstructorElement
                                text={ingredient.name}
                                thumbnail={ingredient.image}
                                price={ingredient.price}
                                type={type}
                                isLocked={ingredient.price % 3 === 0}
                                extraClass={'ml-2'}
                            />
                        </div>
                    )
                })}
            </div>
            <div className={`${styles.order} p-6`}>
                <span className='text text_type_main-medium pr-4'>
                    610 <CurrencyIcon type='primary' />
                </span>
                <Button
                    type='primary'
                    size='large'
                    htmlType='button'
                >
                    Оформить заказ
                </Button>
            </div>
        </>

    )
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired
        })
    ),
}