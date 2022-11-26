import PropTypes from 'prop-types'
import {
    DragIcon,
    ConstructorElement,
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../utils/types'
import { Modal } from '../modal'
import { useModal } from '../../hooks'
import { OrderDetails } from './order-details'
import styles from './styles.module.css'

export const BurgerConstructor = ({ ingredients }: { ingredients: IIngredient[] }) => {
    const [ isModalOpen, toggleModal ] = useModal()

    if (!ingredients.length) {
        return <></>
    }
    
    const bun = ingredients.find(i => i.type === 'bun')
    const orderCost = ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0)
    
    return (
        <>
            <div className={`${styles.ingridients}`}>
                <div className={`${styles.ingridient} pl-6`}>
                    {bun && <ConstructorElement
                        text={bun.name}
                        thumbnail={bun.image}
                        price={bun.price}
                        type='top'
                        isLocked={true}
                        extraClass={'ml-2'}
                    />}
                </div>
                <div className={`${styles.ingridientsScrol} custom-scroll`}>
                    {
                        ingredients
                            .filter(ingredient => ingredient.type !== 'bun')
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
                    {bun && <ConstructorElement
                        text={bun.name}
                        thumbnail={bun.image}
                        price={bun.price}
                        type='bottom'
                        isLocked={true}
                        extraClass={'ml-2'}
                    />}
                </div>
            </div>
            <div className={`${styles.orderToolbar} p-6`}>
                <span className='text text_type_main-medium pr-4'>
                    {orderCost} <CurrencyIcon type='primary' />
                </span>
                <Button
                    type='primary'
                    size='large'
                    htmlType='button'
                    onClick={toggleModal}
                >
                    Оформить заказ
                </Button>
            </div>
            <Modal
                isOpen={isModalOpen}
                handleClose={toggleModal}
                title='Детали заказа'
            >
                <OrderDetails/>
            </Modal>
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
