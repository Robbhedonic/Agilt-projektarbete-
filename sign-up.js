// set info in local storage +validation form


let usernameSignup = document.querySelector("#username-signup")
let emailSignup = document.querySelector("#email-signup")
let passwordSignup = document.querySelector("#password-signup")
let repasswordSignup = document.querySelector("#repassword-signup")
let btnSignup = document.querySelector("#signup-btn");
let setLocalStorageInfo = (e) => {
    e.preventDefault()

    let usernameValue = usernameSignup.value
    let emailValue = emailSignup.value
    let passwordValue = passwordSignup.value
    let repasswordValue = repasswordSignup.value
    if (usernameValue === "" || emailValue === "" || passwordValue === "" || repasswordValue === "" || repasswordValue === "" || repasswordValue != passwordValue) {
        if (usernameValue === "") {
            usernameSignup.nextElementSibling.innerHTML = "please fill field"
            usernameSignup.nextElementSibling.style.display = "block"
            usernameSignup.nextElementSibling.style.color = "red"
        } else {
            usernameSignup.nextElementSibling.style.display = "none"
        }
        if (emailValue === "") {
            emailSignup.nextElementSibling.innerHTML = "please fill field"
            emailSignup.nextElementSibling.style.display = "block"
            emailSignup.nextElementSibling.style.color = "red"
        } else {
            emailSignup.nextElementSibling.style.display = "none"
        }
        if (repasswordValue === "" || repasswordValue != passwordValue) {
            if (repasswordValue === "") {



                repasswordSignup.nextElementSibling.innerHTML = "please fill field"
                repasswordSignup.nextElementSibling.style.display = "block"
                repasswordSignup.nextElementSibling.style.color = "red"
            } else if (repasswordValue !== passwordValue) {
                repasswordSignup.nextElementSibling.innerHTML = "password is not matched !"
                repasswordSignup.nextElementSibling.style.display = "block"
                repasswordSignup.nextElementSibling.style.color = "red"
            }
        } else {
            repasswordSignup.nextElementSibling.style.display = "none"
        }
        if (passwordValue === "") {
            passwordSignup.nextElementSibling.innerHTML = "please fill field"
            passwordSignup.nextElementSibling.style.display = "block"
            passwordSignup.nextElementSibling.style.color = "red"
        } else {
            passwordSignup.nextElementSibling.style.display = "none"
        }





    } else {
        localStorage.usernameinfo = usernameSignup.value;
        localStorage.emailinfo = emailSignup.value;
        localStorage.passwordinfo = passwordSignup.value
        setTimeout(() => {
            window.location = "log-in.html"
        }, 2000)
    }

}

btnSignup.addEventListener("click", setLocalStorageInfo)