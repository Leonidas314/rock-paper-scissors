
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
 
});
/*Funcion que elije aletoreamente Piedra Papel o Tijera, jugadad d la computadora*/

function CPUselector(){
let randomNumber =Math.floor(Math.random()*(3-0));
 
    if (randomNumber==0){
        computerChoice = "Piedra";

        document.getElementById('piedraCPU').style.background = 'blue';

        setTimeout(function(){ document.getElementById('piedraCPU').style.background = 'black';},1720);
       
        
    }else if (randomNumber == 1){
        computerChoice = "Papel";
        
        document.getElementById('papelCPU').style.background = 'blue';

        setTimeout(function(){document.getElementById('papelCPU').style.background = 'black';}, 1720)
    }else{
        computerChoice = "Tijera";
        document.getElementById('tijeraCPU').style.background = 'blue';


        setTimeout(function(){document.getElementById('tijeraCPU').style.background = 'black';}, 1720)
    }
    return computerChoice;
}

/*Funcion que compara las elecciones de ambos jugadores y decide quien ganó*/

function Ganador(playerChoice,CPUchoice){
    if(playerChoice == computerChoice){
        console.log("Empate");
    }else
    if(playerChoice == "Piedra" && CPUchoice == "Papel"){
        console.log("CPU WIN");
    }else
    if(playerChoice == "Piedra" && CPUchoice=="Tijera"){
        console.log("PLAYER WIN");
    }else
    if(playerChoice == "Papel" && CPUchoice == "Piedra"){
        console.log("PLAYER WIN");
    }else
    if(playerChoice == "Papel" && CPUchoice == "Tijera"){
        console.log("CPU WWIN");
    }else
    if(playerChoice == "Tijera" && CPUchoice == "Piedra"){
    console.log("CPU WIN");
    }else
    if(playerChoice == "Tijera" && CPUchoice == "Papel"){
        console.log("PLAYER WIN");
    }
    return false;
}


/*Capturar el evento click sobre las imagenes de piedra, papel o tijera, diferenciando cada una*/

/*Cuando se haga click en el elemento id="piedra","papel", o tijera quiero que :

1)

*/

       piedra.addEventListener('click',function(){
        
            let playerChoice = "Piedra";
            console.log("Jugador elije " + playerChoice );

            let CPUchoice = CPUselector();
            console.log("CPU elije " + CPUchoice);

            let resultadoRonda = Ganador(playerChoice,CPUchoice);

       })

       papel.addEventListener('click',function(){
            
            let playerChoice = "Papel";
            console.log("Jugador elije " + playerChoice);


            let CPUchoice = CPUselector();
            console.log("CPU elije " + CPUchoice);


            let resultadoRonda = Ganador(playerChoice,CPUchoice);
       })

       tijera.addEventListener('click',function(){

            let playerChoice = "Tijera";
            console.log("Jugador elije " + playerChoice);

            let CPUchoice = CPUselector();
            console.log("CPU elije " + CPUchoice);


            let resultadoRonda = Ganador(playerChoice,CPUchoice);
       })


