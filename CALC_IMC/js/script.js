let height = document.querySelector("main form .height");
let weight = document.querySelector("main form .weight");

let calc = document.querySelector("main form .btns .calc");
let clear = document.querySelector("main form .btns .clear");

let back = document.querySelector(".classifications .back")

let form = document.querySelector("main .container-ext-form");
let containerResult = document.querySelector("main .result");

let imc = document.querySelector("main .result .imc");
let situation = document.querySelector("main .result .situation");

clear.addEventListener("click", ()=>{
    height.value = "";
    weight.value = "";
})

function calculate(){
    if((!height.value) || (!weight.value)){
        return;
    }
    form.classList.add("none");
    containerResult.classList.remove("none");

    let result = (weight.value/Math.pow(height.value, 2)).toFixed(1);
    
    imc.textContent = result;

    if(result<18.5){
        imc.style.color = "#c5d11b";
        situation.textContent = "Magreza";
        situation.style.color = "#c5d11b";
    } else if(result >= 18.5 && result < 24.9){
        imc.style.color = "rgb(45, 168, 45)";
        situation.textContent = "Normal";
        situation.style.color = "rgb(45, 168, 45)";
    } else if(result >= 25 && result <29.9){
        imc.style.color = "rgb(192, 162, 29)";
        situation.textContent = "Sobrepeso";
        situation.style.color = "rgb(192, 162, 29)";
    }   else if(result >= 30 && result < 39.9){
        imc.style.color = "rgb(177, 108, 18)";
        situation.textContent = "Obesidade";
        situation.style.color = "rgb(177, 108, 18)";
    }   else if(result > 40){
        imc.style.color = "red";
        situation.textContent = "Obesidade grave";
        situation.style.color = "red";
    }
}

back.addEventListener("click", ()=>{
    form.classList.remove("none");
    containerResult.classList.add("none");
    height.value = "";
    weight.value = "";
})

height.addEventListener("keydown", (e)=>{
    if(e.key === "."){
        e.preventDefault();
    }
weight.addEventListener("keydown", (e)=>{
    if(e.key === "."){
        e.preventDefault();
    }
document.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        calculate();
    }
calc.addEventListener("click", ()=>{
    calculate();
})
})
})
})