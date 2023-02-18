"use strict";

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



const caja3 = document.querySelector(".caja_3")
const verificarVisibilidad1 = (entradas) =>{
    const entry = entradas[0];
    console.log(entry.isIntersecting)
}


const observer1 = new IntersectionObserver(verificarVisibilidad1);
observer1.observe(caja3)


const cajas = document.querySelectorAll(".cajas")
const verificarVisibilidad = (entradas) =>{
    for(let entry of entradas){
        if (entry.isIntersecting) {
            console.log(`
                se esta viendo la caja ${entry.target.textContent}
            `)
        }
    }
}

const observer = new IntersectionObserver(verificarVisibilidad);
for(let caja of cajas){
    observer.observe(caja)
}


const cajas_3 = document.querySelector(".cajas_3")

const callback = (entradas) =>{
    const entry = entradas[0];
    console.log(entry.isIntersecting)
}
let option = { 
        rootMargin: '50px',
        threshold: 1.0
}
const observer_2 = new IntersectionObserver(callback,option);
observer_2.observe(cajas_3)