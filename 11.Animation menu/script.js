const btn = document.querySelector('.btn')
const link = document.querySelector('.link')

btn.addEventListener('click', () => {
    link.classList.toggle('active')
})