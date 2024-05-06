let boxes = document.querySelectorAll(".box");
const createBox = document.querySelector(".input-note button");
let inputNote = document.querySelector(".input-note input");
let main = document.querySelector("main");
const search = document.querySelector(".search input");

search.addEventListener("input", ()=>{

    // Capturar o input de Search e transformá-lo em Lowercase
    let searchLowerCase = search.value.toLowerCase();
    // console.log(searchLowerCase);

    // Capturar uma lista com o conteúdo em texto de todas as notas
    boxes.forEach((box)=>{

        let boxValuesNote = box.children[0].children[0];

        // Capturar o texto em cada nota e transformá-lo em Lowercase
        let boxValuesNoteLowerCase = boxValuesNote.value.toLowerCase();
        
        // Lógica de busca if
        if(!(boxValuesNoteLowerCase.includes(searchLowerCase))){
            let boxTarget = boxValuesNote.parentNode.parentNode;
            console.log(boxTarget);
            boxTarget.classList.add("hidden");
        }
        if(boxValuesNoteLowerCase.includes(searchLowerCase)){
            let boxTarget = boxValuesNote.parentNode.parentNode;
            console.log(boxTarget);
            boxTarget.classList.remove("hidden");
        }
    })
})

let createBoxFunction = (note) =>{

    if(!inputNote.value){
        return
    }

    let box = document.createElement("div");
    box.classList.add("box");

    let boxText = document.createElement("div");
    boxText.classList.add("box-text");

    box.appendChild(boxText);

    let textArea = document.createElement("textarea");
    textArea.placeholder = "Adicione algum texto...";
    textArea.value = note;

    let pin = document.createElement("div");
    pin.classList.add("pin");

    let thumbstack = document.createElement("i");
    thumbstack.classList.add("fa-solid");
    thumbstack.classList.add("fa-thumbtack");

    pin.appendChild(thumbstack);

    boxText.appendChild(textArea);
    boxText.appendChild(pin);

    let moreOptions = document.createElement("div");
    moreOptions.classList.add("more-options");

    let xmark = document.createElement("i");
    xmark.classList.add("fa-solid");
    xmark.classList.add("fa-xmark");

    let copy = document.createElement("i");
    copy.classList.add("fa-regular");
    copy.classList.add("fa-copy");

    moreOptions.appendChild(xmark);
    moreOptions.appendChild(copy);

    box.appendChild(moreOptions);

    main.appendChild(box);

    boxes = document.querySelectorAll(".box");

    inputNote.value = "";

    // Adicionar manipuladores de eventos para xmark e copy dentro da nova caixa
    addEventListenersToBox(box);
}

function addEventListenersToBox(box) {
    const xmark = box.querySelector(".fa-xmark"); // Seleciona o ícone "X" dentro da caixa
    const copy = box.querySelector(".fa-copy"); // Seleciona o ícone de cópia dentro da caixa
    const thumbstack = box.querySelector(".pin .fa-thumbtack"); // Seleciona o thumbstack (alfinete) dentro da caixa

    let isClicked = false; // Variável para controlar se o thumbstack foi clicado

    // Evento quando o mouse passa por cima do thumbstack
    thumbstack.addEventListener("mouseover", () => {
        if (!isClicked) thumbstack.style.opacity = "0.9"; // Define a opacidade como 0.9 se não foi clicado
    });

    // Evento quando o mouse sai de cima do thumbstack
    thumbstack.addEventListener("mouseout", () => {
        if (!isClicked) thumbstack.style.opacity = "0.5"; // Define a opacidade como 0.5 se não foi clicado
    });

    // Evento de clique no thumbstack
    thumbstack.addEventListener("click", (e) => {
        e.stopPropagation(); // Impede a propagação do evento para elementos pai
        isClicked = !isClicked; // Alterna o estado de clique do thumbstack

        // Define a opacidade com base no estado de clique
        thumbstack.style.opacity = isClicked ? "1" : "0.5";
        let textAreaElement = box.querySelector(".box-text textarea")

        if (isClicked) {
            // Move a box clicada para o início da lista de boxes
            main.prepend(box); // Insere a box no início de main
            box.style.backgroundColor = "#2a2b30";
            textAreaElement.style.backgroundColor = "#2a2b30";
        } else {
            // Se a box foi desafixada (thumbstack não está clicado)
            // Mantenha a ordem das outras boxes de acordo com a ordem em que foram clicadas
            box.style.backgroundColor = "#202124";
            textAreaElement.style.backgroundColor = "#202124";
        }  
    });

    // Evento quando o mouse passa por cima da caixa
    box.addEventListener("mouseover", () => {
        xmark.style.opacity = "0.5"; // Define a opacidade do ícone "X" como 0.5
        copy.style.opacity = "0.5"; // Define a opacidade do ícone de cópia como 0.5
    });

    // Evento quando o mouse sai de cima da caixa
    box.addEventListener("mouseout", () => {
        if (!isClicked) thumbstack.style.opacity = "0.5"; // Define a opacidade do thumbstack como 0.5 se não foi clicado
        xmark.style.opacity = "0"; // Define a opacidade do ícone "X" como 0
        copy.style.opacity = "0"; // Define a opacidade do ícone de cópia como 0
    });

    // Evento quando o mouse passa por cima do ícone "X"
    xmark.addEventListener("mouseover", (e) => {
        e.stopPropagation(); // Impede a propagação do evento para elementos pai
        xmark.style.opacity = "1"; // Define a opacidade do ícone "X" como 1
        copy.style.opacity = "0.5"; // Define a opacidade do ícone de cópia como 0.5
    });

    // Evento quando o mouse passa por cima do ícone de cópia
    copy.addEventListener("mouseover", (e) => {
        e.stopPropagation(); // Impede a propagação do evento para elementos pai
        copy.style.opacity = "1"; // Define a opacidade do ícone de cópia como 1
        xmark.style.opacity = "0.5"; // Define a opacidade do ícone "X" como 0.5
    });

    // Evento quando o mouse sai de cima do ícone "X"
    xmark.addEventListener("mouseout", (e) => {
        e.stopPropagation(); // Impede a propagação do evento para elementos pai
        xmark.style.opacity = "0.5"; // Define a opacidade do ícone "X" como 0.5
    });

    // Evento quando o mouse sai de cima do ícone de cópia
    copy.addEventListener("mouseout", (e) => {
        e.stopPropagation(); // Impede a propagação do evento para elementos pai
        copy.style.opacity = "0.5"; // Define a opacidade do ícone de cópia como 0.5
    });
}

createBox.addEventListener("click", () => {

    createBoxFunction(inputNote.value);
});
window.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-xmark")){
        let element = e.target.parentNode.parentNode;
        element.remove();
    }
})
window.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-copy")){
        let element = e.target.parentNode.parentNode;
        let note = element.querySelector("textarea").value;
        createBoxFunction(note);
    }
})
window.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        createBoxFunction(inputNote.value);
    }
})
main.addEventListener("input", ()=>{
    console.log("Houve edição");
    console.log(main);
    localStorage.setItem("updatedMain", main)
})

window.addEventListener("load", ()=>{
    let recentMain = localStorage.getItem("updatedMain");
    main = recentMain;
})