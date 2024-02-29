// login and name 
let loginDiv = document.querySelector(".log-in")
let logoutDiv = document.querySelector(".log-out")
//let useName = document.querySelector(".name-u")
let logoutBtn = document.querySelector(".l-out")
let welcomeText = document.querySelector(".welcome-text")
let userName = document.querySelector(".user-name")
let userNameProfile = document.querySelector(".user-name-profile")

//console.log(logoutBtn)

if (localStorage.usernameinfo) {
  loginDiv.style.display = "none";
 logoutDiv.style.display = "flex";
   // useName.innerHTML = localStorage.usernameinfo
   //userNameProfile.innerHTML = localStorage.usernameinfo
  // userName.innerHTML = localStorage.usernameinfo
  // userName.innerHTML = localStorage.usernameinfo
   userName.innerHTML = localStorage.usernameinfo

        // welcomeText.classList.add("show")
        // welcomeText.innerHTML = `welcome ${localStorage.usernameinfo} !`
}
let eraselocalstorage = () => {
    localStorage.clear()
    loginDiv.style.display = "flex";
    logoutDiv.style.display = "none";
    // useName.innerHTML = ""
    // welcomeText.classList.remove("show")
}


logoutBtn.addEventListener("click", eraselocalstorage)