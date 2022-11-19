import {
    Logo,
    BurgerIcon,
    ProfileIcon,
    ListIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles.module.css'

export const AppHeader = () => {

    return (
        <header>
            <ul className={styles.nav}>
                <li className={`${styles.nav_item} ${styles.logo} pt-5`}>
                    <Logo />
                </li>
                <li className={`${styles.nav_item} ${styles.constructor} pt-5`}>
                    <BurgerIcon type='primary' />
                    <span className='pl-2 text text_type_main-default'>
                        Конструктор
                    </span>
                </li>
                <li className={`${styles.nav_item} ${styles.order_list} pt-5`}>
                    <ListIcon type='secondary' />
                    <span className='pl-2 text text_type_main-default text_color_inactive'>
                        Лента заказов
                    </span>
                </li>
                <li className={`${styles.nav_item} ${styles.profile} pt-5`}>
                    <ProfileIcon type='secondary' />
                    <span className='pl-2 text text_type_main-default text_color_inactive'>
                        Личный кабинет
                    </span>
                </li>
            </ul>
        </header>
    )
}
