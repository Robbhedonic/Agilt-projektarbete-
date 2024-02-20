// grt info from local storage +validation form


let usernameSignin = document.querySelector("#username-login")
let emailSignin = document.querySelector("#email-login")
let passwordSignin = document.querySelector("#password-login")
let btnSignin = document.querySelector("#login-btn");
// get from localstorage
let username = localStorage.usernameinfo
let email = localStorage.emailinfo
let password = localStorage.passwordinfo
    //console.log(username, email, password)

let getinfofromlocalstorage = (e) => {
    e.preventDefault()

    // input value
    let usernameValue = usernameSignin.value
    let emailValue = emailSignin.value
    let passwordValue = passwordSignin.value



    //
    // validation

    if (usernameSignin.value === "" || emailSignin.value === "" || passwordValue === "") {
        if (usernameValue === "") {
            usernameSignin.nextElementSibling.innerHTML = "please fill field"
            usernameSignin.nextElementSibling.style.display = "block"
            usernameSignin.nextElementSibling.style.color = "red"
        } else {
            usernameSignin.nextElementSibling.style.display = "none"
        }
        if (emailSignin.value === "") {
            emailSignin.nextElementSibling.innerHTML = "please fill field"
            emailSignin.nextElementSibling.style.display = "block"
            emailSignin.nextElementSibling.style.color = "red"
        } else {
            emailSignin.nextElementSibling.style.display = "none"
        }

        if (passwordValue === "") {
            passwordSignin.nextElementSibling.innerHTML = "please fill field"
            passwordSignin.nextElementSibling.style.display = "block"
            passwordSignin.nextElementSibling.style.color = "red"
        } else {
            passwordSignin.nextElementSibling.style.display = "none"
        }
    } else {


        if (usernameSignin.value !== username || emailSignin.value !== email || passwordSignin.value !== password) {



            if (usernameSignin.value !== username) {
                usernameSignin.nextElementSibling.innerHTML = "username is not exist"
                usernameSignin.nextElementSibling.style.display = "block"
                usernameSignin.nextElementSibling.style.color = "red"
            } else {
                usernameSignin.nextElementSibling.style.display = "none"
            }
            if (emailSignin.value !== email) {
                emailSignin.nextElementSibling.innerHTML = "email is not exist"
                emailSignin.nextElementSibling.style.display = "block"
                emailSignin.nextElementSibling.style.color = "red"
            } else {
                emailSignin.nextElementSibling.style.display = "none"
            }
            if (passwordSignin.value !== password) {

                passwordSignin.nextElementSibling.innerHTML = "password is not matched !"
                passwordSignin.nextElementSibling.style.display = "block"
                passwordSignin.nextElementSibling.style.color = "red"
            } else {
                passwordSignin.nextElementSibling.style.display = "none"
            }

        } else {

            //console.log("ok")
            setTimeout(() => {
                window.location = "index.html"
            }, 2000)

        }
    }

}

btnSignin.addEventListener("click", getinfofromlocalstorage)