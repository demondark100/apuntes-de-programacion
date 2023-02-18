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



const numScroll = document.getElementById("numScroll");

let scroll = 0

window.addEventListener("scroll",()=>{
    scroll = window.pageYOffset;
    numScroll.textContent = scroll;
})



const hora = document.getElementById("hora");
const mostrar = document.getElementById("mostrar");
const quitar = document.getElementById("quitar")


let hour = null
const rapido = new Date().toLocaleTimeString()

mostrar.addEventListener("click",()=>{
    hora.textContent = rapido;
    hour = setInterval(()=>{
        hora.textContent = new Date().toLocaleTimeString();
    }, 1000)
})

quitar.addEventListener("click",()=>{
    clearInterval(hour);
    hora.textContent = "";
})



const pokemonContainer = document.querySelector(".pokemon-container");

async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemons = await response.json();

  pokemons.results.forEach(async (pokemon) => {
    const pokemonResponse = await fetch(pokemon.url);
    const pokemonData = await pokemonResponse.json();

    const pokemonCard = `
      <div class="pokemon-card">
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" />
        <h2>${pokemonData.name}</h2>
      </div>
    `;

    pokemonContainer.innerHTML += pokemonCard;
  });
}

getPokemons()