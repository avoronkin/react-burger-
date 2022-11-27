import {
    Button,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerConstructorContext } from '../../services/burger-constructor-contexts'
import { useContext } from 'react'
import { Modal } from '../modal'
import { useModal, useCreateOrder } from '../../hooks'
import { OrderDetails } from './order-details'
import styles from './order-toolbar.module.css'

export const OrderToolbar = () => {
    const [{ orderCost, bunIngredient, internalIngredients }] = useContext(BurgerConstructorContext)
    const canBeOrdered = bunIngredient && internalIngredients.length
    const [isModalOpen, toggleModal] = useModal()
    const ingredients = internalIngredients.map(i => i._id)
    if (bunIngredient) {
        ingredients.push(bunIngredient._id)
    }

    const { createOrder, response: createOrderResponse, loading, error } = useCreateOrder()
    if (error) {
        throw new Error('Ошибка при созданн заказа')
    }

    const submitOrder = () => {
        createOrder({ ingredients })
        .then(() => {
            toggleModal()
        })
    }

    return (
        <>
            <div className={`${styles.orderToolbar} p-6`}>
                <span className='text text_type_main-medium pr-4'>
                    {orderCost} <CurrencyIcon type='primary' />
                </span>
                <Button
                    type='primary'
                    size='large'
                    htmlType='button'
                    onClick={() => submitOrder()}
                    disabled={!canBeOrdered || loading}
                >
                    Оформить заказ
                </Button>
            </div>
            <Modal
                isOpen={isModalOpen}
                handleClose={toggleModal}
                title='Детали заказа'
            >
                <OrderDetails createOrderResponse={createOrderResponse} />
            </Modal>
        </>
    )
}
