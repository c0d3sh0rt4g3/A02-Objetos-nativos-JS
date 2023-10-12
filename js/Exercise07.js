let newWindow
let width = 400
let height = 400
let resizing = true


const openWindow = ()=> {
    if (newWindow) {
        newWindow.close()
    }

    let left = Math.floor(Math.random() * (window.innerWidth - width))
    let top = Math.floor(Math.random() * (window.innerHeight - height))

    newWindow = window.open('', 'Resizable window', `width=${width}, height=${height}, left=${left}, top=${top}`)
}

const resizeWindow = ()=> {
    if (resizing) {
        width -= 40
        height -= 40
    if (width <= 160) {
        resizing = false
    }
    } else {
        width += 40
        height += 40
    }

    newWindow.resizeTo(width, height)

    if (width <= 160 && !resizing) {
        clearInterval(resizeInterval)
    }
}
const resizeInterval = setInterval(resizeWindow, 1000)
