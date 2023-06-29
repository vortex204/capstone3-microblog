document.addEventListener("DOMContentLoaded", ()=> {
document.getElementById("loginButton").addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginData = {
      username: username,
      password: password
    };
    console.log(loginData)

    localStorage.setItem("loginData", JSON.stringify(loginData));// save in local storage


    login(loginData);
    });
})
