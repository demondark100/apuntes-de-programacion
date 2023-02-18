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



// seleccionamos las variables respectivas para usarlas mas adelante.
const hora = document.getElementById("hora");
const iniciar = document.getElementById("iniciar");
const detener = document.getElementById("detener");


// crearemos una clase llamada "Reloj" este recibira como parametro el parrafo que se dibujara en el DOM
class Reloj {
    constructor(time){
        this.time = time

        // la variable horas guardara el tiempo de actualizacion por ahora solo es null
        this.horas = null
    }
    iniciar(){
        // ahora horas ira actualizando de 1 en 1 segundo el dom
        this.horas = setInterval(() => {
            this.time.textContent = new Date().toLocaleTimeString()
        }, 1000);
    }
    detener(){
        // decimos que se detenga el tiempo del interval y luego quitamos todo texto del DOM
        clearInterval(this.horas)
        this.time.textContent = ""
    }
}

// cremos una variable toda pendeja xd esta creara al objeto y de paso le ponemos el elemento p que estara en el DOM
const a = new Reloj(hora);

// ahora ponemos los eventos en los botones con sus respectivos metodos para que se ejecuten segun sea
iniciar.addEventListener("click",()=>a.iniciar())
detener.addEventListener("click",()=>a.detener())