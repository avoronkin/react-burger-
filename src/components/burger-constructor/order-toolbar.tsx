import {
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Modal } from '../modal'
import { useModal } from '../../hooks'
import { OrderDetails } from './order-details'
import styles from './order-toolbar.module.css'
import { useAppSelector } from '../../hooks'
import { burgerSelector } from '../../services/store/selectors'

export const OrderToolbar = () => {
    const { price, bunIngredient, internalIngredients} = useAppSelector(burgerSelector)
    const canBeOrdered = bunIngredient && internalIngredients.length
    
    const [isModalOpen, toggleModal] = useModal()
    
    // const { createOrder, response: createOrderResponse, loading, error } = useCreateOrder()
    // if (error) {
    //     throw new Error('Ошибка при созданн заказа')
    // }
    
    const submitOrder = () => {
        const ingredients = internalIngredients.map(i => i._id)
        if (bunIngredient) {
            ingredients.push(bunIngredient._id)
        }

        // createOrder({ ingredients })
        // .then(() => {
        //     toggleModal()
        // })
    }

    return (
        <>
            <div className={`${styles.orderToolbar} p-6`}>
                <span className='text text_type_main-medium pr-4'>
                    {price} <CurrencyIcon type='primary' />
                </span>
                <Button
                    type='primary'
                    size='large'
                    htmlType='button'
                    onClick={() => submitOrder()}
                    // disabled={!canBeOrdered || loading}
                >
                    Оформить заказ
                </Button>
            </div>
            <Modal
                isOpen={isModalOpen}
                handleClose={toggleModal}
                title='Детали заказа'
            >
                {/* <OrderDetails createOrderResponse={createOrderResponse} /> */}
            </Modal>
        </>
    )
}
