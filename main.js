function getRandomColor() {
    // Tạo giá trị ngẫu nhiên từ 0 đến 16777215 (FFFFFF trong hệ thập lục phân)
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Đảm bảo mã màu có đủ 6 ký tự
    return `#${randomColor.padStart(6, '0')}`;
}

const backgroud = document.querySelector('body')
const message = document.querySelector ('.message')

const messages = ['bé', 'ơi', 'trung', 'thu', 'vui', 'vẻ', 'nha!!', '❤️', '😘', '😍']
let i = 0
let display = ''
const loop = setInterval (() => {
    if (i === messages.length) {
        i = 0
        display = ''
    }
    backgroud.style.backgroundColor = getRandomColor ()
    message.innerHTML = display +=  messages[i].toUpperCase () + " "
    ++i
}, 800)


document.querySelector ('.btn').addEventListener ('click', () => {
    clearInterval (loop)
    backgroud.style.backgroundColor = 'black'
})


