if (NameofUser) {
    welcomeText.classList.add("show")
    welcomeText.innerHTML = `Welcome ${NameofUser}!`


} else {
    welcomeText.innerHTML = `welcome ${lNameofUser}!`
    welcomeText.classList.remove("show")


}