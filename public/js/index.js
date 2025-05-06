let toBeContinue = document.querySelector(".continue")
let menu = document.querySelector(".menu")
let continueState = 1

menu.onmousedown = (e) => {
    e.target.classList.toggle('menu-item-selected')
}
menu.onmouseup = (e) => {
    e.target.classList.toggle('menu-item-selected')
}

toBeContinue.onclick = () => {
    if (continueState === 1) {
        toBeContinue.textContent = 'to be continue...'
        continueState = 2
    } else {
        toBeContinue.textContent = 'Продолжение следует...'
        continueState = 1
    }
}

