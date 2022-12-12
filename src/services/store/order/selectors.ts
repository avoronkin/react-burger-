import { RootState } from '../index'

export const selectOrder = (store: RootState) => store.order.order
export const selectCreateOrderRequest = (store: RootState) => store.order
