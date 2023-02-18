const numero = document.getElementById("numero");
const decrementar = document.getElementById("decrementar");
const resetear = document.getElementById("resetear");
const incrementar = document.getElementById("incrementar");

let contador = 0;
decrementar.addEventListener("click",()=>{
    numero.textContent = contador -= 1;
})

incrementar.addEventListener("click",()=>{
    numero.textContent = contador += 1;
})
resetear.addEventListener("click",()=>{
    contador = 0;
    numero.textContent = contador;
})