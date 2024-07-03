const day = document.querySelector('.day')
const time = document.querySelector('.time')

const date = new Date()
day.textContent = `Today is ${date.toLocaleDateString('en-US', { weekday: 'long' })}`
time.textContent = `The Time is ${date.toLocaleTimeString('en-US')}`