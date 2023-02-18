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
console.log(textArea.length - 2);








const elegir_imagen = document.querySelector(".elegir_imagen");
const imagen1 = document.querySelector(".imagen1");
const imagen2 = document.querySelector(".imagen2");
const imagen3 = document.querySelector(".imagen3");
const mostrar_img = document.querySelectorAll(".mostrar_img");

let guardarImagenes = []
function seleccionarImagenes(imagen) {
    for (let i = 0; i < mostrar_img.length; i++) {
        guardarImagenes[i] = document.querySelector(`.${imagen}${i}`);
    }
}
function ponerImagen(link,alt,title){
    seleccionarImagenes("imagen__");
    for (let i = 0; i < mostrar_img.length; i++) {
        guardarImagenes[i].setAttribute("src",link);
        guardarImagenes[i].setAttribute("alt",alt);
        guardarImagenes[i].setAttribute("title",title);
    }
}

imagen1.addEventListener("click",()=>{
    ponerImagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTb5dXKmHsJK_w4mWAKzomMGQWaa0ea_A36A&usqp=CAU","Power","Power");
})
imagen2.addEventListener("click",()=>{
    ponerImagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeb6M77PujyrnY5_wMr-QBkqMFs_vggwzEw&usqp=CAU","Makima","Makima");
})
imagen3.addEventListener("click",()=>{
    ponerImagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtyqIG0S8mzwIgdNM8aO2DYlFrsl2wGAjDg&usqp=CAU","Kobeni","Kobeni");
})

const img_over1 = document.querySelector(".img_over1");
const img_over2 = document.querySelector(".img_over2");
const img_over3 = document.querySelector(".img_over3");

imagen1.addEventListener("mouseover",()=>{
    img_over1.classList.add("mostrar_imgss");
})
imagen1.addEventListener("mouseout",()=>{
    img_over1.classList.remove("mostrar_imgss");
})
imagen2.addEventListener("mouseover",()=>{
    img_over2.classList.add("mostrar_imgss");
})
imagen2.addEventListener("mouseout",()=>{
    img_over2.classList.remove("mostrar_imgss");
})
imagen3.addEventListener("mouseover",()=>{
    img_over3.classList.add("mostrar_imgss");
})
imagen3.addEventListener("mouseout",()=>{
    img_over3.classList.remove("mostrar_imgss");
})