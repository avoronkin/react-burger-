import { IIngredient } from '../../../types'
import { normaApi, ICreateOrderResponse } from '../../norma-api'
import { AppThunk } from '../index'
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
export const CREATE_ORDER_ERROR = 'CREATE_ORDER_ERROR'

export interface CreateOrderRequestAction {
    type: typeof CREATE_ORDER_REQUEST,
}
export interface CreateOrderSuccessAction {
    type: typeof CREATE_ORDER_SUCCESS
    payload: {
        orderNumber: number
    }
}
export interface CreateOrderErrorAction {
    type: typeof CREATE_ORDER_ERROR
}

export type CreateOrder = CreateOrderRequestAction | CreateOrderSuccessAction | CreateOrderErrorAction
export type OrderActions = CreateOrder

const createOrderRequest = (): CreateOrderRequestAction => ({
    type: 'CREATE_ORDER_REQUEST'
})

const createOrderSuccess = (res: ICreateOrderResponse): CreateOrderSuccessAction => ({
    type: 'CREATE_ORDER_SUCCESS',
    payload: {
        orderNumber: res.order.number
    }
})

const createOrderError = (): CreateOrderErrorAction => ({
    type: 'CREATE_ORDER_ERROR'
})

export function createOrder(ingredients: IIngredient[]): AppThunk {
    return (dispatch) => {
        dispatch(createOrderRequest())

        normaApi.createOrder({
            ingredients: ingredients.map(i => i._id)
        })
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
