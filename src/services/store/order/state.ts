export interface OrderState {
    createOrderRequest: boolean
    createOrderError: boolean
    orderNumber?: number
}

export const initialState: OrderState = {
    createOrderRequest: false,
    createOrderError: false,
}
