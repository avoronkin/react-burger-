export interface OrderState {
    createOrderRequest: boolean
    createOrderError: boolean
    order?: {
        name: string
        number: number
    }
    orderDetailsOpen: boolean
}

export const initialState: OrderState = {
    createOrderRequest: false,
    createOrderError: false,
    orderDetailsOpen: false,
}
