let button = document.querySelector("button");
let input = document.querySelector("input[type='text']");
let container = document.querySelector(".container");
let containerQr = document.querySelector(".container-qr");

function gerar(input){
    if(!input.value){
        return;
    }
    button.innerHTML = "Gerando código...";
    containerQr.innerHTML = `
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}" alt="QR Code gerado">
    `
    document.querySelector(".container-qr img").addEventListener("load", ()=>{
        container.classList.add("active");
        containerQr.classList.remove("display-none");
        button.innerHTML = "Gerar QR Code";
    })
    input.addEventListener("blur", ()=>{
        if(!input.value){
            container.classList.remove("active");
            containerQr.classList.add("display-none");
        }
    })
}
button.addEventListener("click", ()=>{
    gerar(input)
})
input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        gerar(input);
    }
})
document.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        gerar(input);
    }
})