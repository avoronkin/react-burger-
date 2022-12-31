export const BASE_URL = 'https://norma.nomoreparties.space/api'

export const DND_TYPES = {
    INGREDIENT: 'ingredient',
    INTERNAL: 'internal',
}

export const ROUTES = {
    MAIN: '/',
    REGISTER: '/register',
    LOGIN: '/login',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    PROFILE: '/profile',
    ORDERS: '/profile/orders',
    ORDER: '/profile/orders/:id',
    LOGOUT: '/logout',
    INGREDIENT_DETAILS: '/ingredients/:id'

}

export const SESSION_TIME = 24 * 60 * 60
