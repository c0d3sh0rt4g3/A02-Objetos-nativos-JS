const actualizarHora = () => {
    const clock = document.getElementById('clock')
    const now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let amPm = 'AM'

    if (hours >= 12) {
        amPm = 'PM'
        if (hours > 12) {
            hours -= 12
        }
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }

    clock.textContent = `${hours}:${minutes}:${seconds} ${amPm}`
}

actualizarHora()
setInterval(actualizarHora, 1000)
