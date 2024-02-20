let getdata = async(apilink) => {
    let data = await fetch(apilink)
    let json = await data.json()
    console.log(data)
}

getdata("https://zenquotes.io/api/quotes/")



// ham menu

let ham = document.querySelector(".ham")
let containerMenu = document.querySelector(".container-menu")

let showhammenu = () => {
    ham.classList.toggle("active")
    containerMenu.classList.toggle("active")
}

ham.addEventListener("click", showhammenu)
    // end of ham menu
    // ham menu2

let ham2 = document.querySelector(".ham2")
    //console.log(ham2)
    //let containerMenu = document.querySelector(".container-menu")
    //////
    // aside menu
let aside = document.querySelector(".search-bar-container .aside");

ham2.addEventListener("click", (e) => {
    containerMenu.classList.remove("active")
})
aside.addEventListener("click", (e) => {
    if (containerMenu.classList.contains("active")) {
        containerMenu.classList.remove("active")
        console.log("hi")

    } else {
        containerMenu.classList.add("active")

    }

})




// let showhamMenu2 = () => {

//     ham2.classList.toggle("active")
//     containerMenu.classList.toggle("active")
// }

// ham2.addEventListener("click", showhamMenu2)

///get mode from localstorage
body = document.querySelector("body")
let getModeLightFromLocal = () => {
    if (localStorage.mode && localStorage.mode === "dark-mode") {
        body.classList.add("dark")
    } else {
        body.classList.remove("dark")
    }

}
getModeLightFromLocal()



// function sild bar

let arrowContainer = document.querySelector(".container-menu .menu .arrows")

let containerMenu2 = document.querySelector(".container-menu .menu")
let containerMenu2Li = document.querySelectorAll(".container-menu .menu li a")
let containerMenuIconRight = document.querySelector(".container-menu .menu .arrows i.fa-solid.fa-chevron-right")
let containerMenuIconLeft = document.querySelector(".container-menu .menu .arrows i.fa-solid.fa-chevron-left")
let socialmedia = document.querySelectorAll(".social-media span")
arrowContainer.addEventListener("click", () => {
    console.log("hi")
    containerMenu2.classList.toggle("active");
    containerMenuIconRight.classList.toggle("active")
    containerMenuIconLeft.classList.toggle("active")
    containerMenu2Li.forEach((li) => {
        li.classList.toggle("active")
    })
    socialmedia.forEach((span) => {
        span.classList.toggle("active")

    })

})