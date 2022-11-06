import {
    Logo,
    BurgerIcon,
    ProfileIcon,
    ListIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles.module.css'

export const AppHeader = () => {
    const navItemClass = `${styles.nav_item} p-5`
    
    return (
        <header>
            <ul className={styles.nav}>
                <li className={navItemClass}>
                    <BurgerIcon type='primary' />
                    <span className='pl-2 text text_type_main-default'>
                        Конструктор
                    </span>
                </li>
                <li className={navItemClass}>
                    <ListIcon type='secondary' />
                    <span className='pl-2 text text_type_main-default text_color_inactive'>
                        Лента заказов
                    </span>
                </li>
                <Logo />
                <li className={navItemClass}>
                    <ProfileIcon type='secondary' />
                    <span className='pl-2 text text_type_main-default text_color_inactive'>
                        Личный кабинет
                    </span>
                </li>
            </ul>
        </header>
    )
}
