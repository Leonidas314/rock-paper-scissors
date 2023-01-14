/*Capturar evento click en play-button*/

var boton = document.querySelector("#play-button");

/*"Escuchamos" el evento "click" en el boton capturado anteriormente como varible "boton"*/

/*boton.addEventListener("click",function(event){

    console.log("Haz clikeado en el boton, se ha cpaturado la acción click");
})*/

document.getElementById("play-button").addEventListener('click', function(){
    alert("si");
});