import {
    CheckMarkIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles.module.css'

export const OrderDetails = () => {
    return (
        <div className={`${styles.orderContent} m-2`}>
            <h2 className="text text_type_digits-large">034536</h2>

            <p className="text text_type_main-medium pt-6">Идентификатор заказа</p>

            <span className="p-10"><CheckMarkIcon type="primary" /></span>

            <p className="text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}