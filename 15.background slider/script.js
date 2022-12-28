const slides = document.querySelectorAll('.slide')
const body = document.body
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

changeSlide()

function changeSlide() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

right()
left()

function right() {
    rightBtn.addEventListener('click', () => {
        activeSlide++

        if(activeSlide > slides.length - 1) {
            activeSlide = 0
        }

        changeSlide()
        slideActive()
    })
}

function left() {
    leftBtn.addEventListener('click', () => {
        activeSlide--

        if(activeSlide < 0) {
            activeSlide = slides.length - 1
        }

        changeSlide()
        slideActive()
    })

}

function slideActive() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
    
}