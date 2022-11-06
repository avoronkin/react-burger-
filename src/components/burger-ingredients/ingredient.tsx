import {
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './styles.module.css'
import { Ingredient } from '../../utils/types'
import PropTypes from 'prop-types'

export const IngredientFC = (props: Ingredient) => {
    return (
        <div className={`${styles.ingredient} text text_type_main-default`}>
            <img alt={props.name} src={props.image}/>
            <h3><span className='pr-2'>{props.price}</span><CurrencyIcon type="primary" /></h3>
            <h4>{props.name}</h4>
        </div>
    )
}

IngredientFC.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}
