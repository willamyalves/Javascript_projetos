let value = document.querySelector(".container-multiplication-table .value");

let qtd = document.querySelector(".container-multiplication .qtd");

let button = document.querySelector(".calculate .button-calculate");

let title2 = document.querySelector(".title-2");

let tableResult = document.querySelector(".table-result");

let p = document.querySelector(".result p");

let table = document.querySelector(".result .table-result table")

button.addEventListener("click", ()=>{

    if(value.value !== "" && qtd.value == ""){
        alert("Preencha o multiplicador.");
    } else if(qtd.value !== "" && value.value == ""){
        alert("Preencha o número da tabuada.");
    } else if(qtd.value <= 0){
        alert("O multiplicador não pode ser menor ou igual a 0");
        qtd.value = "";
    } else if(value.value !== "" && qtd.value !== ""){
        title2.innerHTML = `<h1 class="title-2">Tabuada do número: ${value.value}</h1>`;

        p.style.display = "none";

        table.innerHTML = ""; 

        for (let i = 1 ; i <= qtd.value ; i++){

            let tr = document.createElement("tr");
            tr.innerHTML = `
            <td>
                ${value.value} x ${i} = ${value.value*i}
            </td>
            `
            table.appendChild(tr);
        }

        tableResult.style.display = "block";

        value.value = "";
        qtd.value = "";
    }
})