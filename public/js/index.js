let menu = document.querySelector(".menu")

menu.onmousedown = (e) => {
    e.target.classList.toggle('menu-item-selected')
}
menu.onmouseup = (e) => {
    e.target.classList.toggle('menu-item-selected')
}



