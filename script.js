let singInbtn=document.querySelector("#sign_in-btn");
let singUpbtn=document.querySelector("#sign_up-btn");
let container=document.querySelector(".container");

singUpbtn.addEventListener('click',()=>{
    container.classList.add("sign_up-mode");
});
singInbtn.addEventListener('click',()=>{
    container.classList.remove("sign_up-mode");
});
