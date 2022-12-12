import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
    CLOSE_ORDER_DETAILS,
    OrderActions,
} from './actions'
import { OrderState, initialState } from './state'

export const orderReducer = (state = initialState, action: OrderActions): OrderState => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST: {
            return {
                ...state,
                createOrderRequest: true,
            }
        }
        case CREATE_ORDER_SUCCESS: {
            return {
                ...state,
                createOrderRequest: false,
                order: {
                    name: action.payload.name,
                    number: action.payload.order.number,
                },
                orderDetailsOpen: true,
            }
        }
        case CREATE_ORDER_ERROR: {
            return {
                ...state,
                createOrderRequest: false,
                createOrderError: true
            }
        }

        case CLOSE_ORDER_DETAILS: {
            return {
                ...state,
                orderDetailsOpen: false,
            }
        }
        default:
            return state
    }
}
