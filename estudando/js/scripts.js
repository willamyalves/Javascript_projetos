let nome = document.querySelector(".nome");

nome.addEventListener("focus", ()=>{
    console.log("Clicou");
})
nome.addEventListener("blur", ()=>{
    console.log("Retirou o foco")
})