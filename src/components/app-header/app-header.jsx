import React from 'react';
import {
    Logo,
    BurgerIcon,
    ProfileIcon,
    ListIcon
} from '@ya.praktikum/react-developer-burger-ui-components'
// Из библиотеки UI-компонентов возьмите следующие:
// логотип,
// иконки,
// типографику,
// систему отступов.
// Остальную вёрстку выполните самостоятельно.
import styles from './styles.module.css'

function Nav(props) {
    return (
        <ul className={styles.nav}>{props.children}</ul>
    )
}

function NavItem({Icon, children, active }) {
    const iconType = active ? 'primary' : 'secondary'
    const textClassName = active ? 'pl-2 text text_type_main-default' : 'pl-2 text text_type_main-default text_color_inactive'
    
    return (
        <li className={[styles.nav_item, 'p-5'].join(' ')}>{active}
            <Icon type={iconType}/>
            <span className={textClassName}>
                {children}
            </span>
        </li>
    )
}

export function AppHeader() {
    return (
        <header>
            <Nav>
                <NavItem Icon={BurgerIcon} active>Конструктор</NavItem>
                <NavItem Icon={ListIcon}>Лента заказов</NavItem>
                <Logo />
                <NavItem Icon={ProfileIcon}>Личный кабинет</NavItem>
            </Nav>
        </header>
    )
}