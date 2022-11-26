import {
    CheckMarkIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import styles from './order-details.module.css'
import { CreateOrderResponse } from '../../services/norma-api'

export const OrderDetails = ({ createOrderResponse }: { createOrderResponse?: CreateOrderResponse}) => {

    return (
        !createOrderResponse?.success ? <div>Ошибка при созданнии заказа</div> :
        <div className={`${styles.orderContent} m-2`}>
            <h2 className="text text_type_digits-large">{createOrderResponse.order.number}</h2>

            <p className="text text_type_main-medium pt-6">{createOrderResponse.name}</p>

            <span className="p-10"><CheckMarkIcon type="primary" /></span>

            <p className="text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

OrderDetails.propTypes = {
    createOrderResponse: PropTypes.shape({
        name: PropTypes.string.isRequired,
        order: PropTypes.shape({
            number: PropTypes.number.isRequired
        }).isRequired,
        success: PropTypes.bool.isRequired,
    })
}
