if (localStorage.usernameinfo) {
    welcomeText.classList.add("show")
    welcomeText.innerHTML = `Welcome ${localStorage.username}!`
   
    
   
    
} else {
    welcomeText.innerHTML = `welcome ${localStorage.username}!`
    welcomeText.classList.remove("show")


}