let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})
let textAreas = [];
const textArea = document.querySelectorAll("textarea");
textAreas = textArea;
let botones = [];
let codigos = [];
let mensaje = [];
const cood = document.querySelectorAll(".cood");
let boton = botones;
const texto_copiado = document.querySelector(".texto_copiado");
function seleccionarBoton(variable) {
    for (let i = 0; i < textAreas.length; i++) {
        botones[i] = document.querySelector(`.${variable}${i}`);
    }
}
function seleccionarCodigo(variable) {
    for (let i = 0; i < textAreas.length; i++) {
        codigos[i] = document.querySelector(`.${variable}${i}`);
    }
}
function seleccionarparrafo(variable) {
    for (let i = 0; i < textAreas.length; i++) {
        mensaje[i] = document.querySelector(`.${variable}${i}`);
    }
}
seleccionarBoton("copiar");
seleccionarCodigo("codificacion");
seleccionarparrafo("t");

for (let i = 0; i < botones.length; i++) {
    try {
        boton[i].addEventListener("click",()=>{
            mensaje[i].classList.add("mostrar_texto_copiado");
            setTimeout(() => {
                mensaje[i].classList.remove("mostrar_texto_copiado");
            }, 1050);
            codigos[i].focus();
            codigos[i].classList.add("selector_transparente");
            cood[i].classList.add("selector_transparente");
            document.execCommand("selectAll");
            document.execCommand("copy");
        })
    } catch (error) {}
}

let guardarCodificacion = cood;
for (let i = 0; i < guardarCodificacion.length; i++) {
    cood[i].addEventListener("mouseover",()=>{
        cood[i].classList.remove("selector_transparente");
    })
    cood[i].addEventListener("mouseout",()=>{
        cood[i].classList.add("selector_transparente");
    })
}


// seleccionar al numero principal
const numero = document.getElementById("numero");

// seleccionar a los 4 botones
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

// creamos una clase contar
class Contar{
    constructor(valor){
        this.valor = valor
        // este valor servira para guardar una variable que cambiara de forma dinamica y lo dibujarsa en el dom
    }

    // aqui creamos los respectivos metodos del objeto
    sumar(){
        numero.textContent = this.valor += 1
    }
    restar(){
        numero.textContent = this.valor -= 1
    }
    multiplicar(){
        numero.textContent = this.valor *= 2
    }
    dividir(){
        numero.textContent = this.valor /= 2
    }
}

// esta sera la variable que cambiara dinamicamente 
let numb = 0

// ponemos la variable como el valor del objeto para que se vaya modificando
const contar = new Contar(numb);


// hacemos eventos de click parfa ir llamando a cada metodo respectivo
sumar.addEventListener("click",()=>{
    contar.sumar()
})
restar.addEventListener("click",()=>{
    contar.restar()
})
multiplicar.addEventListener("click",()=>{
    contar.multiplicar()
})
dividir.addEventListener("click",()=>{
    contar.dividir()
})