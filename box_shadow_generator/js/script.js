// Seleção de elementos:
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontalRef");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#verticalRef");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blurRef");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spreadRef");
const color = document.querySelector("#color");
const colorRef = document.querySelector("#colorRef");
const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacityRef");
const inset = document.querySelector("#inset");
const box = document.querySelector("#box");
const defaultBoxShadow = document.querySelector("#default-box-shadow span");
const webkitBoxShadow = document.querySelector("#webkit-box-shadow span");
const mozBoxShadow = document.querySelector("#moz-box-shadow span");
const rules = document.querySelector("#rules");
const copyRules = document.querySelector("#copyRules");

// Classe:
class BoxShadowGenerator{
    constructor(
        horizontal,
        horizontalRef,
        vertical,
        verticalRef,
        blur,
        blurRef,
        spread,
        spreadRef,
        color,
        colorRef,
        opacity,
        opacityRef,
        inset,
        box,
        defaultBoxShadow,
        webkitBoxShadow,
        mozBoxShadow,
        rules,
        copyRules
    ){
        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.color = color;
        this.colorRef = colorRef;
        this.opacity = opacity;
        this.opacityRef = opacityRef;
        this.inset = inset;
        this.box = box;
        this.defaultBoxShadow = defaultBoxShadow;
        this.webkitBoxShadow = webkitBoxShadow;
        this.mozBoxShadow = mozBoxShadow;
        this.rules = rules;
        this.copyRules = copyRules;
    }
    initialize(){
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.blurRef.value = this.blur.value;
        this.spreadRef.value = this.spread.value;
        this.colorRef.value = this.color.value;
        this.opacityRef.value = this.opacity.value;

        this.applyRule();
        this.showRule();
    }
    updateValue(type, value){
        switch(type){
            case "horizontal":
                this.horizontalRef.value = value;
                break;

            case "vertical":
                this.verticalRef.value = value;
                break;

            case "blur":
                this.blurRef.value = value;
                break;

            case "spread":
                this.spreadRef.value = value;
                break;

            case "color":
                this.colorRef.value = value;
                break;

            case "opacity":
                this.opacityRef.value = value;
                break;

            case "inset":
                this.insetValue = value;
                break;
        }
        
    }
    applyRule(){
        const rgbValue = this.hexToRgb(this.colorRef.value)

        this.box.style.boxShadow = `${this.insetValue ? "inset" : ""} ${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px rgba(${rgbValue}, ${this.opacityRef.value})`

        this.currentRule = this.box.style.boxShadow;
        this.showRule();
    }
    hexToRgb(hex){
        hex = hex.replace('#', '');
        if (hex.length !== 6) {
            throw new Error('O formato hexadecimal deve ter 6 caracteres.');
        }
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        return `${r}, ${g}, ${b}`;
    }
    showRule(){
        this.defaultBoxShadow.innerText = this.currentRule;
        this.webkitBoxShadow.innerText = this.currentRule;
        this.mozBoxShadow.innerText = this.currentRule;

        this.rules = `box-shadow: ${defaultBoxShadow.innerText};\n-webkit-box-shadow: ${this.webkitBoxShadow.innerText};\n-moz-box-shadow: ${this.mozBoxShadow.innerText};`
    }
    copyText(){
        navigator.clipboard.writeText(this.rules)
        .then(() => {
            console.log("Conteúdo copiado com sucesso!");
        })
        .catch(err => {
            console.error("Erro ao copiar conteúdo:", err);
        });
        this.copyRules.innerText = "Copiado com sucesso!"

        setTimeout(() => {
            this.copyRules.innerText = "Clique no quadro acima para copiar as regras!"
        }, 1000);
    }
}

// Instância:

const boxShadow = new BoxShadowGenerator(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    color,
    colorRef,
    opacity,
    opacityRef,
    inset,
    box,
    defaultBoxShadow,
    webkitBoxShadow,
    mozBoxShadow,
    rules,
    copyRules
);

boxShadow.initialize();

// Eventos:
horizontal.addEventListener("input", (e)=>{
    value = e.target.value;

    boxShadow.updateValue("horizontal", value);
    boxShadow.applyRule();
})
vertical.addEventListener("input", (e)=>{
    value = e.target.value;

    boxShadow.updateValue("vertical", value);
    boxShadow.applyRule();
})
blur.addEventListener("input", (e)=>{
    value = e.target.value;

    boxShadow.updateValue("blur", value);
    boxShadow.applyRule();
})
spread.addEventListener("input", (e)=>{
    value = e.target.value;

    boxShadow.updateValue("spread", value);
    boxShadow.applyRule();
})
color.addEventListener("input", (e)=>{
    value = e.target.value;

    boxShadow.updateValue("color", value);
    boxShadow.applyRule();
})
opacity.addEventListener("input", (e)=>{
    value = e.target.value;

    boxShadow.updateValue("opacity", value);
    boxShadow.applyRule();
})
inset.addEventListener("input", (e)=>{
    value = e.target.checked;

    boxShadow.updateValue("inset", value);
    boxShadow.applyRule();
})
rules.addEventListener("click", ()=>{
    boxShadow.copyText();
})

console.log(boxShadow);