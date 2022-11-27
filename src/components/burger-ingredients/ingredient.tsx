import {
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { IIngredient } from '../../utils/types'
import { useModal } from '../../hooks'
import { Modal } from '../modal'
import { IngredientDetails } from './ingredient-details'
import styles from './ingredient.module.css'

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
