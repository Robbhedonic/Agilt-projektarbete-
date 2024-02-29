if (localStorage.usernameinfo) {
    welcomeText.classList.add("show")
    welcomeText.innerHTML = `Welcome ${localStorage.usernameinfo}!`
   
    
   
    
} else {
    welcomeText.innerHTML = `welcome ${localStorage.usernameinfo}!`
    welcomeText.classList.remove("show")


}