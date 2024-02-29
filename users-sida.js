if (localStorage.usernameinfo) {
    welcomeText.classList.add("show")
    welcomeText.innerHTML = `Welcome ${localStorage.usernameinfo}!`
    userName.classList.add("show")
    userName.innerHTML = `${localStorage.usernameinfo}`
    userNameProfile.classList.add("show")
    userNameProfile.innerHTML =`${localStorage.usernameinfo}`
    useName.classList.add("show")
    useName.innerHTML = `${localStorage.usernameinfo}`
    
   
    
} else {
    welcomeText.innerHTML = `welcome ${localStorage.usernameinfo}!`
    welcomeText.classList.remove("show")


}