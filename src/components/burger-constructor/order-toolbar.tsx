import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { closeOrderDetails, createOrder } from '../../services/store/order/actions'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Modal } from '../modal'
import { OrderDetails } from './order-details'
import { resetBurgerIngredients } from '../../services/store/burger-constructor/actions'
import { selectCreateOrderRequest } from '../../services/store/order/selectors'
import { selectDataForOrder } from '../../services/store/burger-constructor/selectors'
import styles from './order-toolbar.module.css'

export const OrderToolbar = () => {
    const dispatch = useAppDispatch()
    const { burgerCost, canBeOrdered, dataForOrder } = useAppSelector(selectDataForOrder)
    const { createOrderRequest, createOrderError, orderDetailsOpen } = useAppSelector(selectCreateOrderRequest)

    const handleClose = () => {
        dispatch(closeOrderDetails())
        dispatch(resetBurgerIngredients())
    }

    const submitOrder = () => {
        dispatch(createOrder(dataForOrder))
    }

    return (
        <>
            <div className={`${styles.orderToolbar} p-6`}>
                <span className='text text_type_main-medium pr-4'>
                    {burgerCost} <CurrencyIcon type='primary' />
                </span>
                <Button
                    type='primary'
                    size='large'
                    htmlType='button'
                    onClick={submitOrder}
                    disabled={!canBeOrdered || createOrderRequest || orderDetailsOpen}
                >
                    {createOrderRequest ? 'Создаём заказ' : 'Оформить заказ'}
                </Button>
            </div>
            {createOrderError && <p className="text text_type_main-default">Ошибка при создании заказа</p>}
            { orderDetailsOpen && <Modal
                handleClose={handleClose}
                title='Детали заказа'
            >
                <OrderDetails />
            </Modal>}
        </>
    )
}
