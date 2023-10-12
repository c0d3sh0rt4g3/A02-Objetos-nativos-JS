const firstDate = new Date("2023-01-01")
const currentDate = new Date()

const millisecDiff = currentDate - firstDate
const daysPassed = millisecDiff / (1000 * 60 * 60 * 24)
const weeksPassed = parseInt(daysPassed / 7)
document.write(`We're on the week number ${weeksPassed}`)