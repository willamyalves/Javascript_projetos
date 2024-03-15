let elements = document.querySelectorAll(".nav-images ul li .element")
let btns = document.querySelectorAll(".nav-images ul li");
let image = document.querySelector(".images img");
// console.log(image);

btns.forEach((btn=>{
    btn.addEventListener("click", ()=>{
        elements.forEach((element=>{
            element.classList.remove("border-blue");
            element.classList.add("border-black")
        }))
        btn.children[0].classList.add("border-blue");

        if(btn.classList.contains("green")){
            image.style.opacity = "0.4";
            setTimeout(()=>{
                image.src = "/IPHONE13_CLONE/img/iphone_green.jpg";
                image.style.opacity = "1";
            }, 200);
        } else if(btn.classList.contains("silver")){
            image.style.opacity = "0.4";
            setTimeout(()=>{
                image.src = "/IPHONE13_CLONE/img/iphone_silver.jpg";
                image.style.opacity = "1";
            }, 200);
        }else if(btn.classList.contains("gold")){
            image.style.opacity = "0.4";
            setTimeout(()=>{
                image.src = "/IPHONE13_CLONE/img/iphone_golden.jpg";
                image.style.opacity = "1";
            }, 200);
        } else if(btn.classList.contains("graphite")){
            image.style.opacity = "0.4";
            setTimeout(()=>{
                image.src = "/IPHONE13_CLONE/img/iphone_grafite.jpg";
                image.style.opacity = "1";
            }, 200);
        } else if(btn.classList.contains("blue")){
            image.style.opacity = "0.4";
            setTimeout(()=>{
                image.src = "/IPHONE13_CLONE/img/iphone_blue.jpg";
                image.style.opacity = "1";
            }, 200);
        }
    })
}))