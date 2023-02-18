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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#00f";
ctx.fillStyle = "#0f0";
ctx.lineWidth = "4";
ctx.strokeRect(25,50,150,100);
ctx.fillRect(15,20,140,80);


const canvas_1 = document.getElementById("canvas_1");
const ctx_1 = canvas_1.getContext("2d");

ctx_1.strokeStyle = "#19a9fc";
ctx_1.lineWidth = "4"
ctx_1.lineTo(50,20);
ctx_1.lineTo(50,150);
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineTo(50,20);
ctx_1.lineTo(98,85);
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineTo(98,85);
ctx_1.lineTo(150,20);
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineTo(150,20);
ctx_1.lineTo(150,150);
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.arc(100,85,45,0,10);
ctx_1.stroke();


const dibujo = document.getElementById("dibujo");
const dif = dibujo.getBoundingClientRect();
const context = dibujo.getContext("2d");
let painting,color,lineWidth,difX,difY;
    
dibujo.addEventListener("mousedown",e=>{
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.querySelector(".colorizacion").value;
    lineWidth = document.querySelector(".ancho_line").value;
    context.beginPath();
})

dibujo.addEventListener("mousemove",e=>{
    if (painting) {
        dibujar(difX,difY,e.clientX - dif.left,e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
})

dibujo.addEventListener("mouseup",e=>{
    context.closePath();
    painting = false;
})

const dibujar = (x1,y1,x2,y2) =>{
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}
