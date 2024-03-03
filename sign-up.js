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

            alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
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