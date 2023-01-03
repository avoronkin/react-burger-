import {
    BurgerIcon,
    ListIcon,
    Logo,
    ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { TopMenuItem } from './top-menu-item'
import styles from './app-header.module.css'

const topMenuItems: TopMenuItem[] = [
    {
        icon: BurgerIcon,
        to: ROUTES.MAIN,
        text: 'Конструктор',
        extraClass: styles.burgerConstructor,
    },
    {
        icon: ListIcon,
        to: ROUTES.ORDERS,
        text: 'Лента заказов',
        extraClass: styles.orderList,
    },
    {
        icon: ProfileIcon,
        to: ROUTES.PROFILE,
        text: 'Личный кабинет',
        extraClass: styles.profile
    }
]

export const AppHeader = () => {

    return (
        <header>
            <ul className={styles.nav}>
                <li className={`${styles.logo} pt-5`}>
                    <Link to='/' className={styles.navItem}>
                        <Logo />
                    </Link>
                </li>
                {
                    topMenuItems.map((topMenuItem, index) => {
                        return (
                            <TopMenuItem key={index} {...topMenuItem}/>
                        )
                    })
                }
            </ul>
        </header>
    )
}
