//declarar variables de manera para que la variable gurde la funcion.
let numeroSecreto=0;
let intentos=0;
let numeroSorteado = [];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto)
{   let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML=texto;
    
}

function verificarIntento()  {
    let numeroDeUsuario= parseInt(document.getElementById("valorUsuario").value);
   
   console.log(numeroSecreto);
   // si el usuario acerto 
   if (numeroDeUsuario === numeroSecreto)
   {
    asignarTextoElemento("p",`acertaste el numero secreto en ${intentos} ${(intentos == 1) ? "intento" : "intentos"} `);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.querySelector("#reiniciar2").setAttribute("disabled","true");
   }


   else 
   {
    // el usuario no acerto
    if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento("p","El numero secreto es menor")
    }

    else{
        asignarTextoElemento("p","El numero secreto es mayor")
    }

   }
   intentos ++;
   limpiarCaja();
   
    return;
}

function limpiarCaja(){
   let valorCaja= document.querySelector("#valorUsuario");
   valorCaja.value="";
}


function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   // si el numero generado esta incluido en la lista hacemos una cosa si no hacemos otra.

   console.log(numeroGenerado);
   console.log(numeroSorteado);

   if(numeroSorteado.length==numeroMaximo){

    asignarTextoElemento("p","El juego ha finalizado");
    
   }
   else
   {

   if(numeroSorteado.includes(numeroGenerado))
   {
    return generarNumeroSecreto();
   }
   else 
    numeroSorteado.push(numeroGenerado);
   return numeroGenerado;

}
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento("p",`indique un numero entre 1 y ${numeroMaximo} `);
    intentos=1;
 numeroSecreto=generarNumeroSecreto();
}

function reiniciarJuego() {
    //limpiar la caja, nuevo numero secreto,reinicar numero de intentos,indicar mensaje de inicio, dehabulitar el boton de nuevo juego.
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true")
    document.querySelector("#reiniciar2").removeAttribute("disabled")
    
}

condicionesIniciales();
