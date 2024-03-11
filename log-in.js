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
            usernameSignin.nextElementSibling.style.color = "yellow"
        } else {
            usernameSignin.nextElementSibling.style.display = "none"
        }
        if (emailSignin.value === "") {
            emailSignin.nextElementSibling.innerHTML = "please fill field"
            emailSignin.nextElementSibling.style.display = "block"
            emailSignin.nextElementSibling.style.color = "yellow"
        } else {
            emailSignin.nextElementSibling.style.display = "none"
        }

        if (passwordValue === "") {
            passwordSignin.nextElementSibling.innerHTML = "please fill field"
            passwordSignin.nextElementSibling.style.display = "block"
            passwordSignin.nextElementSibling.style.color = "yellow"
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


// show and hide password

let readeyes = document.querySelector(".section:nth-child(3) .fa-solid.fa-eye");
let hiddeneyes = document.querySelector(".section:nth-child(3) .fa-solid.fa-eye-slash");
let sec = document.querySelector(".section:nth-child(3)")
    //console.log(sec)
hiddeneyes.addEventListener("click", hidepass)
readeyes.addEventListener("click", showpass)

function showpass() {
    passwordSignin.type = "text"
    hiddeneyes.classList.add("show")
    readeyes.classList.add("hide")

}

function hidepass() {
    passwordSignin.type = "password"
    hiddeneyes.classList.remove("show")
    readeyes.classList.remove("hide")
}
// end of section