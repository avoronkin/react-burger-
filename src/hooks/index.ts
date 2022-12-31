import type { AppDispatch, RootState } from '../store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppLocation } from '../types'
import { useLocation } from 'react-router-dom'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppLocation = () => useLocation<AppLocation>()
export { useToggle } from './useToggle'
export { useKey } from './useKey'
