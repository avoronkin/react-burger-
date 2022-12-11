import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
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
                orderNumber: action.payload.orderNumber,
            }
        }
        case CREATE_ORDER_ERROR: {
            return {
                ...state,
                createOrderRequest: false,
                createOrderError: true
            }
        }
        default:
            return state
    }
}
