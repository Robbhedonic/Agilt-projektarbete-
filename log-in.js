// global variable
let usernameSignin = document.querySelector("#username-login")
let emailSignin = document.querySelector("#email-login")
let passwordSignin = document.querySelector("#password-login")
let btnSignin = document.querySelector("#login-btn");

let users = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []



// function get information from localstorage
let getinfofromlocalstorage = (e) => {
    e.preventDefault()
        // variable
    let usernameValue = usernameSignin.value
    let emailValue = emailSignin.value
    let passwordValue = passwordSignin.value
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



        if (users.some((el) => {
                // console.log(el)
                return el.username === usernameSignin.value && el.password === passwordSignin.value && el.email === emailSignin.value
            })) {
            let user = users.find(
                (element) => element.username === usernameSignin.value && element.password === passwordSignin.value && element.email === emailSignin.value
            );
            // localstorage username
            //for useded it
            localStorage.setItem("username", user.username)
            localStorage.setItem("email", user.email)
            localStorage.setItem("password", user.password)

            setTimeout(() => {

                window.location = "user.html"
            }, 2000)
        } else {
            alert("username or email orpassword is not valid ")
        }
    }

}


btnSignin.addEventListener("click", getinfofromlocalstorage)