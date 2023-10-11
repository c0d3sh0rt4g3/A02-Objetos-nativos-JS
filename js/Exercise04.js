const actualizarHora = () => {
    const reloj = document.getElementById('reloj')
    const ahora = new Date()
    let hours = ahora.getHours()
    let minutes = ahora.getMinutes()
    let seconds = ahora.getSeconds()
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

    reloj.textContent = `${hours}:${minutes}:${seconds} ${amPm}`
}

actualizarHora()
setInterval(actualizarHora, 1000)
