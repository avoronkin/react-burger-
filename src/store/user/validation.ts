const validateEmail = (email: string) => {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

export const emailIsValid = (email: string):boolean => {
    return !!(email && validateEmail(email))
}

export const passwordIsValid = (password: string): boolean => {
    return !!(password && password.length >=6)
}

export const nameIsValid = (name: string): boolean => {
    return !!(name && name.length > 3)
}

export const tokenIsValid = (token: string): boolean => {
    return !!(token && token.length === 6)
}