self.addEventListener("activavate",()=>{
    console.log("el service worker esta activo.")
})
self.addEventListener("error",()=>{
    console.log("el hubo un error.")
})
self.addEventListener("fetch",e=>{
    console.log("se esta interseptando la peticion.")
})


self.addEventListener("message",e=>{
    e.source.postMessage("se enviara un mensaje desde aqui.");
})