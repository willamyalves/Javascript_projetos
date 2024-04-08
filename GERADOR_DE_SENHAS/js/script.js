let containerCreatePasswd = document.querySelector(".container-create-passwd");
let rowCreatePasswd = document.querySelector(".row-create-passwd a");
let createPasswdButton = document.querySelector(".options-create-passwd .create-passwd-button button");
let createdPasswd = document.querySelector(".created-passwd");
let body = document.querySelector("body");

rowCreatePasswd.addEventListener("click", ()=>{
    containerCreatePasswd.classList.toggle("hidden");

    body.style.height = "100vh";
    createdPasswd.classList.add("hidden");

    if(!(createdPasswd.classList.contains("hidden"))){
        body.style.height = "100%"
    }
})

createPasswdButton.addEventListener("click", (e)=>{
    e.preventDefault();

    createdPasswd.classList.remove("hidden");

    body.style.height = "100%";
})