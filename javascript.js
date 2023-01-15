
let boton = document.querySelector('#play-button');

let introContainer = document.querySelector('.intro-container');

let imagesContainer = document.querySelector('.images-container');

/*Cambiar la propiedad css de un elemento para que no sea visible*/
document.getElementById('images-container').style.display = 'none';

/*Funcion para capturar evento click en  variable boton
se remueve la variable "introContainer" y se cambia la propiedad de
elementon con id ="images-container" a "flex"*/

 boton.addEventListener('click', function(){

    introContainer.remove();
    document.getElementById('images-container').style.display = 'flex'

    console.log("boton activado");
 
})

/*Capturar el evento click sobre las imagenes de piedra, papel o tijera, diferenciando cada una*/

let playerSelectors = document.querySelector('#player-select');

let piedra = document.querySelector('#piedra');
let papel = document.querySelector('#papel');
let tijera = document.querySelector('#tijera');

/*playerSelectors.addEventListener('click',function(){
    console.log("sape")
});*/

function Capturar(){

    
    if(    piedra.addEventListener('click',function(){
            console.log("Piedra");

        let playerChoice = "Piedra";
        return playerChoice;
        console.log(playerChoice);

        })
    ) 
    if(
        papel.addEventListener('click',function(){
            console.log("papel")
          let playerChoice = "Papel";
          return playerChoice;
        })
    )
    if(
        tijera.addEventListener('click',function(){
            console.log("tijera")
            let playerChoice = "Tijera"
            return playerChoice;
        })
    )
        
    return playerChoice;
}

playerChoice = Capturar;
console.log(playerChoice);
/*Funcion que recibe una variable desde la seleccion del jugador y la compara con la seleccion de la maquina*/

function seleccionComparación(playerChoice,cpuChoice){



}