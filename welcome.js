if (NameofUser) {
    welcomeText.classList.add("show")
    welcomeText.innerHTML = `Welcome to ${NameofUser}! We're glad you're here. Explore, connect, and enjoy!`


} else {
    welcomeText.innerHTML = `welcome ${lNameofUser}!`
    welcomeText.classList.remove("show")


}