let toBeContinue = document.getElementsByClassName("continue")
let continueState = 1

console.log(toBeContinue)

toBeContinue.onmousedown = () => {
    console.log(11)
    toBeContinue.classList.toggle('menu-item-down')
}
toBeContinue.onmouseup = () => {
    console.log(22)
    toBeContinue.classList.toggle('menu-item-down')
}
toBeContinue.onClick = () => {
    console.log(33)
    if (continueState === 1) {
        toBeContinue.textContent = 'to be continue...'
        continueState = 2
    } else {
        toBeContinue.textContent = 'Продолжение следует...'
        continueState = 1
    }
}

