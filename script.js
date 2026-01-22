"use strict"

let login = document.getElementById("login-button");
let modalLogin = document.getElementById("login-overlay");

login.addEventListener('click', () => {
    modalLogin.style.visibility = "visible";
})

