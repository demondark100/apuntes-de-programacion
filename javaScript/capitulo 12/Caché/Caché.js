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
