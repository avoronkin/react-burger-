export function setCookie(name: string, value: string, seconds = 1 * 60 * 60) {
    const date = new Date()
    date.setTime(date.getTime()+(seconds * 1000))

    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/` 
}

export function getCookie(name: string) {
    const matches = document.cookie.match(
        // eslint-disable-next-line 
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    )

    return matches ? decodeURIComponent(matches[1]) : undefined
}

export function deleteCookie(name: string) {
    setCookie(name, '', -10)
}
