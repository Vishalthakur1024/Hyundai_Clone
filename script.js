const slides = document.querySelectorAll(".slide")
var counter = 0

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

// const slideImage = () => {
//     (slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`
//     }
// }

const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

var move = document.getElementById('last')

var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')

btn1.onclick = function() {
    move.style.transform = "translateX(0px)"
    btn1.classList.add('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
}
btn2.onclick = function() {
    move.style.transform = "translateX(-100%)"
    btn2.classList.add('active')
    btn1.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
}
btn3.onclick = function() {
    move.style.transform = "translateX(-200%)"
    btn3.classList.add('active')
    btn2.classList.remove('active')
    btn1.classList.remove('active')
    btn4.classList.remove('active')
}
btn4.onclick = function() {
    move.style.transform = "translateX(-300%)"
    btn4.classList.add('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn1.classList.remove('active')
}


// const dropdown = document.querySelectorAll('.dropdown')

// dropdowns.forEach(dropdown => {
//     const select = dropdown.querySelector('.select')
//     const caret = dropdown.querySelector('.caret')
//     const menu = dropdown.querySelector('.menu')
//     const options = dropdown.querySelectorAll('.menu li')
//     const selected = dropdown.querySelector('.selected')

// })
//     select.addEventListener('click',() => {
//     select.classList.toggle('slect-clicked')
//     caret.classList.toggle('caret-rotate')
//     menu.classList.toggle('menu-open')

//     })

//     options.forEach(option => {
//         option.addEventListener('click', () => {
//             selected.innerText = option.innerText
//             select.classList.remove('select-clicked')
//             caret.classList.remove('caret-rotate')
//             menu.classList.remove('menu-open')
//             options.forEach(option =>{
//                 option.classList.remove('deactive')
//             })
//             option.classList.add('deactive')
//         })
//     })
