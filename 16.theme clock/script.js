const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const root = document.getElementsByTagName('html')[0]
const tareek = document.querySelector('.circle')



const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 
    'Oct', 'Nov', 'Dec']

toggle.addEventListener('click' , () => {
    root.classList.toggle('dark')

    if(root.classList.contains('dark')) {
        toggle.innerHTML = 'Light Mode'
    } else {
        toggle.innerHTML = 'Dark Mode'
    }
})


function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hourFormat = hours % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const date = time.getDate()

    const meridian = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourFormat * 30}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minute * 6}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${second * 6}deg)`


    timeEl.innerHTML = `${hourFormat}:${minute < 10 ? `0${minute}` : minute} ${meridian}`;

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class = 'circle'>${date}</span>`
    
}

setTime()

setInterval(setTime, 1000)