import {
    CheckMarkIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-details.module.css'
import { ICreateOrderResponse } from '../../services/norma-api'

export const OrderDetails = ({ createOrderResponse }: { createOrderResponse?: ICreateOrderResponse}) => {

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
