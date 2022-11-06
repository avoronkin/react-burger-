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
    const firstIngredient = ingredients[0]
    const lastIngredient = ingredients[ingredients.length - 1]

    return (
        <>
            <div className={`${styles.ingridients}`}>
                <div className={`${styles.ingridient} pl-6`}>
                    <ConstructorElement
                        text={firstIngredient.name}
                        thumbnail={firstIngredient.image}
                        price={firstIngredient.price}
                        type='top'
                        isLocked={true}
                        extraClass={'ml-2'}
                    />
                </div>
                <div className={`${styles.ingridientsScrol} custom-scroll`}>
                    {
                        ingredients
                            .filter((ingredient, index, array) => index !== 0 && index !== array.length - 1)
                            .map((ingredient) => {
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
                            })
                    }
                </div>
                <div className={`${styles.ingridient} pl-6`}>
                    <ConstructorElement
                        text={lastIngredient.name}
                        thumbnail={lastIngredient.image}
                        price={lastIngredient.price}
                        type='bottom'
                        isLocked={true}
                        extraClass={'ml-2'}
                    />
                </div>
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