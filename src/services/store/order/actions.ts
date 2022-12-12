import { normaApi, ICreateOrderResponse, ICreateOrderRequest } from '../../norma-api'
import { AppThunk } from '../index'
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR'
export const CLOSE_ORDER_DETAILS = 'CLOSE_ORDER_DETAILS'

export interface CreateOrderRequestAction {
    type: typeof CREATE_ORDER_REQUEST,
}
export interface CreateOrderSuccessAction {
    type: typeof CREATE_ORDER_SUCCESS
    payload: {
        name: string
        order: {
            number: number
        }
    }
}
export interface CreateOrderErrorAction {
    type: typeof CREATE_ORDER_ERROR
}
export interface CloseOrderDetailsAction {
    type: typeof CLOSE_ORDER_DETAILS
}


export type CreateOrder = CreateOrderRequestAction | CreateOrderSuccessAction | CreateOrderErrorAction
export type OrderActions = CreateOrder | CloseOrderDetailsAction

const createOrderRequest = (): CreateOrderRequestAction => ({
    type: 'CREATE_ORDER_REQUEST'
})

const createOrderSuccess = (res: ICreateOrderResponse): CreateOrderSuccessAction => ({
    type: 'CREATE_ORDER_SUCCESS',
    payload: res
})

const createOrderError = (): CreateOrderErrorAction => ({
    type: 'CREATE_ORDER_ERROR'
})

export const closeOrderDetails = (): CloseOrderDetailsAction => ({
    type: 'CLOSE_ORDER_DETAILS'
})

export function createOrder(params: ICreateOrderRequest): AppThunk {
    return (dispatch) => {
        dispatch(createOrderRequest())

        normaApi.createOrder(params)
            .then(res => {
                if (res && res.success) {
                    dispatch(createOrderSuccess(res))
                } else {
                    dispatch(createOrderError())
                }
            })
            .catch(() => {
                dispatch(createOrderError())
            })
    }
}
