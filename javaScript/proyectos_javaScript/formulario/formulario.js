const nombre_user = document.querySelector(".nombre_user");
// esto selecciona al nombre de usuario.
const email_user = document.querySelector(".email_user");
// esto slecciona al correo del usuario.
const passwor_user = document.querySelector(".passwor_user");
const confirm_password = document.querySelector(".confirm_password");
// esto selecciona a las contraseña que ss dijite-
const registrarse = document.querySelector(".registrarse");
// esto es el boton enviara los datos.
const mensaje_error1 = document.querySelector(".mensaje_error1");
const mensaje_error2 = document.querySelector(".mensaje_error2");
const mensaje_error2_2 = document.querySelector(".mensaje_error2_2");
const mensaje_error3 = document.querySelector(".mensaje_error3");
const mensaje_error4 = document.querySelector(".mensaje_error4");
const mensaje_error5 = document.querySelector(".mensaje_error5");
// estos son los mensajes que se daran cuando el ususario cometa un error en su registro.
const enviando = document.querySelector(".enviando");
function longitud(variable1,variable2,mensaje1,mensaje2,prevenir) {
    variable2.classList.add("colores");
    if (variable1.value.length < 5) {
        variable2.textContent = mensaje1;
        prevenir.preventDefault();
    } else if (variable1.value.length > 30) {
        variable2.textContent = mensaje2
        prevenir.preventDefault();
    } else{
        variable2.textContent = "";
    }
}
function longitud_correo(variable1,variable2,mensaje1,mensaje2,prevenir) {
    variable2.classList.add("colores");
    if (variable1.value.length < 13) {
        variable2.textContent = mensaje1;
        prevenir.preventDefault();
    } else if (variable1.value.length > 35) {
        variable2.textContent = mensaje2
        prevenir.preventDefault();
    } else{
        variable2.textContent = "";
    }
}
function validar_correo(variable1,variable2,mensaje,prevenir) {
    variable2.classList.add("colores")
    if (variable1.indexOf("@") == -1) {
        prevenir.preventDefault()
        variable2.textContent = mensaje + "@";
    } else if (variable1.indexOf("gmail") == -1) {
        prevenir.preventDefault()
        variable2.textContent = mensaje + "gmail";
    } else if (variable1.indexOf(".") == -1) {
        prevenir.preventDefault()
        variable2.textContent = mensaje + ".";
    } else if (variable1.indexOf("com") == -1) {
        prevenir.preventDefault()
        variable2.textContent = mensaje + "com";
    } else{
        variable2.textContent = ""
    }
}
function confirmar_contraseña(variable1,variable2,variable3,mensaje,prevenir) {
    variable3.classList.add("colores");
    if (variable1.value != variable2.value) {
        variable3.textContent = mensaje
        prevenir.preventDefault();
    } else{
        variable3.textContent = "";
    }
}
registrarse.addEventListener("click",(e)=>{
    longitud(
        nombre_user,
        mensaje_error1,
        "necesitas por lo menos 5 caracteres para continuar.",
        "la cantidad de caracteres sobrepasa los limites.",
        e
    );
    longitud_correo(
        email_user,
        mensaje_error2,
        "necesitas por lo menos 15 caracteres para continuar.",
        "la cantidad de caracteres sobrepasa los limites.",
        e
    );
    validar_correo(
        email_user.value,
        mensaje_error2_2,
        "tu correo no es valido porque falta ",
        e
    )
    longitud(
        passwor_user,
        mensaje_error3,
        "necesitas por lo menos 5 caracteres para continuar.",
        "la cantidad de caracteres sobrepasa los limites.",
        e
    );
    longitud(
        confirm_password,
        mensaje_error4,
        "necesitas por lo menos 5 caracteres para continuar.",
        "la cantidad de caracteres sobrepasa los limites.",
        e
    );
    confirmar_contraseña(
        passwor_user,
        confirm_password,
        mensaje_error5,
        "la contaseña no es igual a la otra",
        e
    )
})