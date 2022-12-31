import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import styles from './help-link.module.css'

export interface HelpLinkProps {
    linkText: string
    beforeText: string
    to: string
}

export const HelpLink = (props: HelpLinkProps) => {
    const {
        linkText,
        beforeText,
        to,
    } = props
    
    return (
        <p className='text text_type_main-default text_color_inactive'>{beforeText} <Link to={to}><Button htmlType='button' type='secondary' size='medium' extraClass={styles.buttonLink}>{linkText}</Button></Link></p>
    )
}
