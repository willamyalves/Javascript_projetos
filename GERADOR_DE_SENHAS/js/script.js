let containerCreatePasswd = document.querySelector(".container-create-passwd");
let rowCreatePasswd = document.querySelector(".row-create-passwd a");
let createPasswdButton = document.querySelector(".options-create-passwd .create-passwd-button button");
let createdPasswd = document.querySelector(".created-passwd");
let body = document.querySelector("body");
let password = document.querySelector(".created-passwd .password");
let letters = document.querySelector(".letters input");
let numbers = document.querySelector(".numbers input");
let symbols = document.querySelector(".symbols input");
let inputLength = document.querySelector(".qtd-character input")
let copyPasswd = document.querySelector(".copy-passwd")

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const symbolsCharacters = "!@#$%&*()-_=+£¢§{}~^][<>/?.,;:";

const getLowerCase = ()=>{

    const value = alphabet[Math.floor(Math.random() * alphabet.length)];
    return value;
}
const getUpperCase = ()=>{

    const value = (alphabet[Math.floor(Math.random() * alphabet.length)]).toUpperCase();
    return value;
}
const getSymbols = ()=>{

    const value = symbolsCharacters[Math.floor(Math.random() * symbolsCharacters.length)]
    return value;
}
const getNumbers = ()=>{

    const value = (Math.floor(Math.random() * 10)).toString();
    return value;
}

const generatePassword = ()=>{

    let length = inputLength.value;

    if(inputLength.value === 0){
        return;
    }

    let generated = [];

    if (letters.checked) {
        generated.push(getLowerCase, getUpperCase);
    }
    if (numbers.checked) {
        generated.push(getNumbers);
    }
    if (symbols.checked) {
        generated.push(getSymbols);
    }

    let password = "";

    let generatedLength = generated.length;

    for(i = 0; i < length; i++){

        let randomFunction = generated[Math.floor(Math.random() * generatedLength)];

        password += randomFunction();

    }
    return password;
}

inputLength.addEventListener("input", ()=>{
    if(inputLength.value >= 26){
        inputLength.value = 25;
    }
    let inputLengthValue = inputLength.value;
    inputLengthValue = inputLengthValue.replace(/\D/g, "");
    inputLength.value = inputLengthValue;
    if(inputLength.value === ""){
        alert("Insira um número válido.");
    }
})

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

    password.innerText = generatePassword();
})
copyPasswd.addEventListener("click", (e)=>{
    e.preventDefault();

    navigator.clipboard.writeText(password.innerText).then(()=>{
        copyPasswd.innerText = "Senha copiada com sucesso!";

        setTimeout(()=>{
            copyPasswd.innerText = "Copiar";
        }, 1000)
    })
})
