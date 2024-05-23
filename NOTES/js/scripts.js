let boxes = document.querySelectorAll(".box");
const createBox = document.querySelector(".input-note button");
let inputNote = document.querySelector(".input-note input");
let main = document.querySelector("main");
const search = document.querySelector(".search input");
const exportButton = document.querySelector(".export button");

let lupa = document.querySelector(".fa-magnifying-glass");

lupa.addEventListener("click", ()=>{

})


search.addEventListener("input", ()=>{

    // Capturar o input de Search e transformá-lo em Lowercase
    let searchLowerCase = search.value.toLowerCase();

    // Capturar uma lista com o conteúdo em texto de todas as notas
    boxes.forEach((box)=>{

        let boxValuesNote = box.children[0].children[0];

        // Capturar o texto em cada nota e transformá-lo em Lowercase
        let boxValuesNoteLowerCase = boxValuesNote.value.toLowerCase();
        
        // Lógica de busca if
        if(!(boxValuesNoteLowerCase.includes(searchLowerCase))){
            let boxTarget = boxValuesNote.parentNode.parentNode;
            boxTarget.classList.add("hidden");
        }
        if(boxValuesNoteLowerCase.includes(searchLowerCase)){
            let boxTarget = boxValuesNote.parentNode.parentNode;
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

    let id = Math.floor(Math.random()*10000);

    boxes = document.querySelectorAll(".box");

    if(boxes.length >= 2){

        boxes.forEach((box)=>{
            if(id === box.id){
                id = Math.floor(Math.random()*10000);
            }
        })

    }

    box.id = id;

    let fixed = Boolean;

    boxes.forEach((box)=>{
        if(box.classList.contains("fixed") === false){
            fixed = false;
        } else{fixed = true};
    })

    boxes = document.querySelectorAll(".box");

    inputNote.value = "";

    saveLocalStorage(note, id, fixed)

    // Adicionar manipuladores de eventos para xmark e copy dentro da nova caixa
    addEventListenersToBox(box);
}

function duplicateBoxFunction(note, fixed){
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

    let id = Math.floor(Math.random()*10000);

    boxes = document.querySelectorAll(".box");

    if(boxes.length >= 2){

        boxes.forEach((box)=>{
            if(id === box.id){
                id = Math.floor(Math.random()*10000);
            }
        })

    }

    box.id = id;

    let textAreaElement = box.querySelector(".box-text textarea")
    
    if(fixed == true){
        box.classList.add("fixed");
        let listNote = []



        
        boxes.forEach((box)=>{
            let objectNote = {
                content: box.children[0].children[0].value,
                id: box.id,
                fixed: box.classList.contains("fixed")
            }


            listNote.push(objectNote);
        })
        localStorage.setItem("note", JSON.stringify(listNote));

        // Move a box clicada para o início da lista de boxes
        main.prepend(box); // Insere a box no início de main
        box.style.backgroundColor = "#2a2b30";
        textAreaElement.style.backgroundColor = "#2a2b30";

    }
    if(fixed == false){

        box.classList.remove("fixed")



        let listNote = []

        
        boxes.forEach((box)=>{
            let objectNote = {
                content: box.children[0].children[0].value,
                id: box.id,
                fixed: box.classList.contains("fixed")
            }

            listNote.push(objectNote);

        })
        localStorage.setItem("note", JSON.stringify(listNote));


            // Se a box foi desafixada (thumbstack não está clicado)
            // Mantenha a ordem das outras boxes de acordo com a ordem em que foram clicadas
            box.style.backgroundColor = "#202124";
            textAreaElement.style.backgroundColor = "#202124";

    }

    boxes = document.querySelectorAll(".box");

    inputNote.value = "";

    // Adicionar manipuladores de eventos para xmark e copy dentro da nova caixa
    addEventListenersToBox(box);
};

function createBoxLS(note, id, fixed){
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

    box.id = id;

    let textAreaElement = box.querySelector(".box-text textarea")
    
    if(fixed == true){
        box.classList.add("fixed");

        // Move a box clicada para o início da lista de boxes
        main.prepend(box); // Insere a box no início de main
        box.style.backgroundColor = "#2a2b30";
        textAreaElement.style.backgroundColor = "#2a2b30";

    }
    if(fixed == false){
        box.classList.remove("fixed")

            // Se a box foi desafixada (thumbstack não está clicado)
            // Mantenha a ordem das outras boxes de acordo com a ordem em que foram clicadas
            box.style.backgroundColor = "#202124";
            textAreaElement.style.backgroundColor = "#202124";
    }

    boxes = document.querySelectorAll(".box");
    
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

        e.target.closest(".box").classList.toggle("fixed");

        let textAreaElement = box.querySelector(".box-text textarea");

        if(e.target.closest(".box").classList.contains("fixed")){

            // Move a box clicada para o início da lista de boxes

            main.prepend(box); // Insere a box no início de main
            box.style.backgroundColor = "#2a2b30";
            textAreaElement.style.backgroundColor = "#2a2b30";
            thumbstack.style.opacity = "1";
        }
        if (!(e.target.closest(".box").classList.contains("fixed"))) {

            // Se a box foi desafixada (thumbstack não está clicado)
            
            // Mantenha a ordem das outras boxes de acordo com a ordem em que foram clicadas

            box.style.backgroundColor = "#202124";
            textAreaElement.style.backgroundColor = "#202124";
            thumbstack.style.opacity = "0.5";
        } 
        let notes = getLocalStorage();

        let objectNote = notes.find(note => note.id == e.target.closest(".box").id)

        let index = notes.findIndex(note => note.id == e.target.closest(".box").id);

        objectNote.fixed = !(objectNote.fixed);

        notes[index] = objectNote;

        localStorage.setItem("note", JSON.stringify(notes));
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
    

    // Editar nota:

    let noteLS_2 = [];

    box.addEventListener("input", (e)=>{

        // console.log(e.target.parentNode.parentNode.id);

        let boxes = box.parentNode.querySelectorAll(".box");

        // console.log(boxID)

        let noteLS_3 = [];


        boxes.forEach((box)=>{
            textArea = box.children[0].children[0];
            let boxID = box.id;
            let fixed = box.classList.contains("fixed");

            let objectNote = {
                content: textArea.value,
                id: boxID,
                fixed: fixed
            }

            noteLS_3.push(objectNote);

        });

        // Após o término do último forEach
        noteLS_2 = noteLS_3; // Substituir noteLS_2 por noteLS_3

        // console.log(noteLS_2)

        
        localStorage.setItem("note", JSON.stringify(noteLS_2))

    });

}

createBox.addEventListener("click", () => {

    createBoxFunction(inputNote.value);
});
window.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-xmark")){
        let element = e.target.parentNode.parentNode;
        element.remove();

        let textArea = element.children[0].children[0];

        let objectList = (JSON.parse(localStorage.getItem("note")));

        objectList.splice(objectList.findIndex(object => object.content === textArea.value), 1)

        noteLS = [];

        if(objectList.length === 0){
            localStorage.clear();
        } if (objectList.length >= 1){
        
            objectList.forEach((note)=>{
                noteLS.push(note);
                localStorage.setItem("note", JSON.stringify(noteLS));
            })
        }
    }
})
window.addEventListener("click", (e)=>{
    if(e.target.classList.contains("fa-copy")){
        let element = e.target.parentNode.parentNode;
        let elementID = element.id;
        let note = element.querySelector("textarea").value;

        let fixed = e.target.closest(".box").classList.contains("fixed");

        duplicateBoxFunction(note, fixed);
    }
})
window.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        createBoxFunction(inputNote.value);
    }
})

function saveLocalStorage(note, id, fixed){



    listNotes = getLocalStorage()

    let objectNote = {
        content: note,
        id: id,
        fixed: fixed
    }

    listNotes.push(objectNote);

    localStorage.setItem("note", JSON.stringify(listNotes));
}

function getLocalStorage(){
    let note = (JSON.parse(localStorage.getItem("note")) || []);
    return note;
}
function showLocalStorage(){
    let notes = getLocalStorage(); // Obter o valor do localStorage

    if (Array.isArray(notes)) { // Verificar se o valor é um array
        notes.forEach((note) => {
            createBoxLS(note.content, note.id, note.fixed);
        });
    } else {
        console.error("O valor retornado do localStorage não é um array válido.");
    }
}

showLocalStorage();

exportButton.addEventListener("click", ()=>{
    let notes = getLocalStorage();
    let list = [];

    // console.log(notes);

    notes.forEach((note)=>{
        // console.log(note)
        listNote = [note.content, note.id, note.fixed]
        list.push(listNote);
    })

    csvList = [
        "Conteúdo", "Id", "Fixado?", ...list
    ]

    csvList = csvList.join();

    csvList2 = csvList.replace("Fixado?,", "Fixado?,\n")

    csvList3 = csvList2.replace(/false,/g, "false,\n");

    csvList4 = csvList3.replace(/true,/g, "true,\n");

     const csvNotes = csvList4;

     console.log(csvNotes);

    const element = document.createElement("a");

    element.href = "data:text/csv;charset=utf-8," + encodeURI(csvNotes);

    element.target = "_blank";

    element.download = "notes.csv";

    element.click();
})