let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    let main = document.querySelector("main")
    main.classList.toggle("mover_content")
})
const pregunta = document.querySelector(".pregunta");
const hola_mundo = document.querySelector(".hola_mundo");
hola_mundo.addEventListener("click",()=>{
    pregunta.textContent = "para que hiciste click izquierdo aqui? te dije click derecho.";
    pregunta.classList.add("mensajee");
    setTimeout(() => {
        pregunta.textContent = "";
    }, 4000);
})