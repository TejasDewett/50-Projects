const love = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let timesClicked = 0

love.addEventListener('dblclick', (e) => {
    createHeart(e)
    timesClick()
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

   const x = e.clientX
   const y = e.clientY

   const imgTop = e.target.offsetTop
   const imgLeft = e.target.offsetLeft

   const imgX = x - imgLeft
   const imgY = y - imgTop

   heart.style.top = imgY + 'px'
   heart.style.left = imgX + 'px'

   love.appendChild(heart)


   setTimeout(() => heart.remove(), 500)
}

function timesClick () {
    if (createHeart) {
        timesClicked++
        times.innerHTML = timesClicked
    }
}