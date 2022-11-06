import PropTypes from 'prop-types'

export const ingredientPropsType = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export const ingredientsPropsType = PropTypes.arrayOf(PropTypes.shape(ingredientPropsType)).isRequired