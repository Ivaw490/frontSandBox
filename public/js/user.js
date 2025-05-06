let userButton = document.getElementsByClassName("user_button");
let headerText = document.getElementsByClassName("header-text");

userNameChecker();

userButton.onclick = function() {
    console.log(123)
    setUserName()
}

function setUserName() {
    console.log(123)
    let userName = prompt("Enter your name");
    localStorage.setItem("userName", userName);
    headerText.textContent += '<br>by ' + userName;
}

function userNameChecker()
{
    console.log(!localStorage.getItem("userName"))
    console.log(userButton)
    if (!localStorage.getItem("userName")) { // todo
        userButton.textContent += ' <p style="color: #ff8900">(не выбран)</p>';
    } else {
        userButton.textContent +=
            ' <p style="color: #00ff0d">(' + localStorage.getItem("userName") + ')</p>';
    }
}
