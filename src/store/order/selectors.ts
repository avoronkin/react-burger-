import { RootState } from '../index'
import { statePath } from './state'

export const selectOrder = (store: RootState) => store[statePath].order
export const selectCreateOrderRequest = (store: RootState) => store[statePath]
