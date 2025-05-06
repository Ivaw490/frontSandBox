let userButton = document.querySelector(".user_button");
let userButtonDel = document.querySelector("#user_button_del");
let selectedUser = document.querySelector("#selected_user");
let headerText = document.querySelector(".header-text-user");

userNameChecker()

userButton.onclick = () => {
    console.log(123)
    setUserName()
}

userButtonDel.onclick = () => {
    localStorage.removeItem("userName");
    userNameChecker()
}

function setUserName() {
    let userName = prompt("Enter your name");

    if (userName === "") {
        return
    }
    localStorage.setItem("userName", userName);

    userNameChecker()
}

function userNameChecker()
{
    let userName = localStorage.getItem("userName");
    if (!userName) {
        selectedUser.innerHTML = ' (не выбран)'
        selectedUser.style.color = '#ff8900'
        headerText.innerHTML = '';
    } else {
        selectedUser.innerHTML = ' ' + userName
        selectedUser.style.color = '#00ff0d'
        headerText.innerHTML = '<br>by ' + userName;
    }
}
