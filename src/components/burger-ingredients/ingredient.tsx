import PropTypes from 'prop-types'
import {
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../utils/types'
import { useModal } from '../../hooks'
import { Modal } from '../modal'
import { IngredientDetails } from './ingredient-details'
import styles from './styles.module.css'

export const Ingredient = (props: IIngredient) => {
    const [ isModalOpen, toggleModal ] = useModal()

    return (
        <>
            <div
                className={`${styles.ingredient} text text_type_main-default`}
                onClick={toggleModal}>
                <img alt={props.name} src={props.image} />
                <h3><span className='pr-2'>{props.price}</span><CurrencyIcon type="primary" /></h3>
                <h4>{props.name}</h4>
            </div>
            <Modal
                isOpen={isModalOpen}
                handleClose={toggleModal}
                title='Детали ингридиента'
            >
                <IngredientDetails {...props} />
            </Modal>
        </>
    )
}

Ingredient.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bun', 'main', 'sauce']),
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
}
