const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const clear = document.getElementById('clear')
const brushSize = document.getElementById('size')
const lineColor = document.getElementById('color')


let size = 20
let isPressed = false
let color = 'black'
let x
let y

lineColor.addEventListener('input', (e) => {
    color = e.target.value 
})


decrease.addEventListener('click', () => {
    size -= 2
    brushSize.innerHTML = size
})

increase.addEventListener('click', () => {
    size += 2
    brushSize.innerHTML = size

})

clear.addEventListener('click', () => {
    window.location.reload()
})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined

})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})



function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

