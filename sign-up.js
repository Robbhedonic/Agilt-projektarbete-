// set info in local storage +validation form


let usernameSignup = document.querySelector("#username-signup")
let emailSignup = document.querySelector("#email-signup")
let passwordSignup = document.querySelector("#password-signup")
let repasswordSignup = document.querySelector("#repassword-signup")
let btnSignup = document.querySelector("#signup-btn");
let users = JSON.parse(localStorage.getItem("user")) || []

// push information to localstoage function
let setLocalStorageInfo = (e) => {

    // value  input value
    let usernameValue = usernameSignup.value
    let emailValue = emailSignup.value
    let passwordValue = passwordSignup.value
    let repasswordValue = repasswordSignup.value

    e.preventDefault()
        // create  object and push it in array
    let newUser = {
        username: usernameSignup.value,
        email: emailSignup.value,
        password: passwordSignup.value,
        isLogin: false,
        id: Date.now()

    }


    // validation of input field
    let validpass = /\w{7,}/g
    let validpasstest = validpass.test(passwordSignup.value)

    let validemail = /\w+@\w+\.\w+/ig
    let validemailtest = validemail.test(emailSignup.value)

    if (usernameValue === "" || emailValue === "" || passwordValue === "" || repasswordValue === "" || repasswordValue === "" || repasswordValue != passwordValue || validpasstest === false || validemailtest === false) {
        if (usernameValue === "") {
            usernameSignup.nextElementSibling.innerHTML = "please fill field"
            usernameSignup.nextElementSibling.style.display = "block"
            usernameSignup.nextElementSibling.style.color = "yellow"
        } else {
            usernameSignup.nextElementSibling.style.display = "none"
        }
        if (emailValue === "") {
            emailSignup.nextElementSibling.innerHTML = "please fill field"
            emailSignup.nextElementSibling.style.display = "block"
            emailSignup.nextElementSibling.style.color = "yellow"
        }
        if (validemailtest === false) {
            emailSignup.nextElementSibling.innerHTML = "ur eamil should have@"
            emailSignup.nextElementSibling.style.display = "block"
            emailSignup.nextElementSibling.style.color = "yellow"

        } else {
            emailSignup.nextElementSibling.style.display = "none"
        }

        if (repasswordValue === "" || repasswordValue != passwordValue) {
            if (repasswordValue === "") {
                repasswordSignup.nextElementSibling.innerHTML = "please fill field"
                repasswordSignup.nextElementSibling.style.display = "block"
                repasswordSignup.nextElementSibling.style.color = "yellow"
            }
            if (repasswordValue !== passwordValue) {
                repasswordSignup.nextElementSibling.innerHTML = "password is not matched !"
                repasswordSignup.nextElementSibling.style.display = "block"
                repasswordSignup.nextElementSibling.style.color = "yellow"
            }

        } else {
            repasswordSignup.nextElementSibling.style.display = "none"
        }
        if (passwordValue === "") {
            passwordSignup.nextElementSibling.innerHTML = "please fill field"
            passwordSignup.nextElementSibling.style.display = "block"
            passwordSignup.nextElementSibling.style.color = "yellow"
        } else if (validpasstest === false) {
            passwordSignup.nextElementSibling.innerHTML = "ur password is week it should be at least 8 character"
            console.log(passwordSignup.nextElementSibling.innerHTML)
            passwordSignup.nextElementSibling.style.display = "block"
            passwordSignup.nextElementSibling.style.color = "yellow"
                // console.log("hi")
        } else {
            passwordSignup.nextElementSibling.style.display = "none"
        }

    } else {
        // push object in localstorage
        // users.push(newUser);

        // localStorage.setItem("user", JSON.stringify(users))
        // here check if the username and e mail is already exist

        let exist = users.length &&
            JSON.parse(localStorage.getItem('user')).some(data =>
                data.username.toLowerCase() == usernameValue.toLowerCase() &&
                data.email.toLowerCase() == emailValue.toLowerCase()
            );
        // alert u already signup 
        if (exist) {

            alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
        } else {
            // else push new array

            users.push(newUser);
            localStorage.setItem('user', JSON.stringify(users));
            setTimeout(() => {
                window.location = "log-in.html"
            }, 2000)
        }



        // go to login page when u sucess

    }
}

btnSignup.addEventListener("click", setLocalStorageInfo)


// read and hide password

function showpass() {
    passwordSignup.type = "text"
    hiddeneyes.classList.add("show")
    readeyes.classList.add("hide")

}

function hidepass() {
    passwordSignup.type = "password"
    hiddeneyes.classList.remove("show")
    readeyes.classList.remove("hide")
}
let readeyes = document.querySelector(".section:nth-child(3) .fa-solid.fa-eye");
let hiddeneyes = document.querySelector(".section:nth-child(3) .fa-solid.fa-eye-slash");
let readeyes1 = document.querySelector(".section:nth-child(4) .fa-solid.fa-eye");
let hiddeneyes1 = document.querySelector(".section:nth-child(4) .fa-solid.fa-eye-slash");
hiddeneyes.addEventListener("click", hidepass)
readeyes.addEventListener("click", showpass)
hiddeneyes1.addEventListener("click", () => {
    repasswordSignup.type = "password"
    hiddeneyes1.classList.remove("show")
    readeyes1.classList.remove("hide")
})
readeyes1.addEventListener("click", () => {
    repasswordSignup.type = "text"
    hiddeneyes1.classList.add("show")
    readeyes1.classList.add("hide")
})


// end of function