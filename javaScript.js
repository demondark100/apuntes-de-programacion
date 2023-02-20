const curso = document.querySelectorAll(".cursos_content");
let menu = document.querySelector(".menu")
menu.addEventListener("click",()=>{
    const menu_nav = document.querySelector(".menu_nav")
    menu_nav.classList.toggle("mover")
    curso.forEach(i=>{
        i.classList.toggle("curso__")
    })
})




function moverElementos(variable1,variable2,nombre,variable3) {
    const capitulos_content = document.querySelector("." + variable1);

    // esto es para seleccionar los article que tienen de nombre "capitulos_content"

    const icono = document.querySelector("." + variable2)

    // aqui estamos seleccionando a los iconos que mostraran a los elementos.

    icono.addEventListener("click",()=>{
        capitulos_content.classList.add(nombre);
        icono.style.opacity = "0";
        icono.style.position = "absolute";
        icono.style.zIndex = "1";
        icono2.style.opacity = "1";
        icono2.style.position = "relative";
        icono2.style.zIndex = "1";
        icono.classList.add("abajo")
    })

    // en este evento de escucha estamos quitando el icono de abajo y posniendo el icono de arriba.



    const icono2 = document.querySelector("." + variable3)
    icono2.addEventListener("click",()=>{
        capitulos_content.classList.remove(nombre);
        icono.style.opacity = "1";
        icono.style.position = "relative";
        icono.style.zIndex = "0";
        icono2.style.opacity = "0";
        icono2.style.position = "absolute";
        icono2.style.zIndex = "0";
        icono2.style.transitionDuration = ".5s"
        icono2.classList.add("arriba")
    })

    // aqui estamos quitando el icono de arriba y poniendo el icono de abajo a la vez que quitamos/ocultamos a los elementos.
}

moverElementos("capitulos_content_1","icono_1","moverOpciones","icono_1_");
moverElementos("capitulos_content_2","icono_2","moverOpciones","icono_2_");
moverElementos("capitulos_content_3","icono_3","moverOpciones","icono_3_");
moverElementos("capitulos_content_4","icono_4","moverOpciones","icono_4_");
moverElementos("capitulos_content_5","icono_5","moverOpciones","icono_5_");

// esta funcion es dinamica y se puede usar para agregar mas cursos como react hacking c# python , etc

// como usar la funcion?
// parametro 1: aqui seleccionaremos al nav que tiene a todos los capitulos.
// parametro 2: aqui seleccionamos el icono de abajo.
// parametro 3: aqyu debes poner una clase para modificar los elementos osea ocultarlos o mostrarlos.
// parametro 4: aqui debes poner el nombre del icono de arriba.

const temas = document.querySelectorAll(".temas");
const contendor_caps = document.querySelectorAll(".contendor_caps");

function recorrer() {
    for (let i = 0; i < temas.length; i++) {
        temas[i].addEventListener("mouseover",()=>{
            contendor_caps[i].classList.add("mostrar_opciones");
        })
        temas[i].addEventListener("mouseout",(e)=>{
            contendor_caps[i].classList.remove("mostrar_opciones")
        })
    }
}
recorrer()