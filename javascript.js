
let boton = document.querySelector('#play-button');

let introContainer = document.querySelector('.intro-container');

let imagesContainer = document.querySelector('.images-container');

/*Cambiar la propiedad css de un elemento para que no sea visible*/
document.getElementById('images-container').style.display = 'none';

document.getElementById('mostrar-ganador').style.display = 'none';

/*document.getElementById('mensaje-vencedor').style.display = 'none';
/*Funcion para capturar evento click en  variable boton
se remueve la variable "introContainer" y se cambia la propiedad de
elementon con id ="images-container" a "flex"*/

 boton.addEventListener('click', function(){

    introContainer.remove();
    document.getElementById('images-container').style.display = 'flex';
    document.getElementById('mostrar-ganador').style.display = 'flex';
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

/*Funcion que reciba la informacion de quien gano la ronda para crear un elemento dentro de las tablas debajo de los selectores de cada jugador*/


function fncrearTd(Winner){

    if(Winner=="CPU"){
        let tdcrear = document.createElement('td');
        let tdcontent = document.createTextNode("CWin");

        tdcontent = tdcrear.appendChild(tdcontent);
        document.getElementById('CPU-table').appendChild(tdcrear);
    }else{

        let tdcrear = document.createElement('td');
        let tdcontent = document.createTextNode("PWin");

        tdcontent = tdcrear.appendChild(tdcontent);
        document.getElementById('Player-table').appendChild(tdcrear);
    }

    return false
}

 let winnerCpu = "CPU";

 let winnerPlayer = "PLayer";



/**VAriable necesaria apara limpiar pantalla con funcion setTimeout mas adelante */
let divMensajeGanador = document.querySelector('#mostrar-ganador');


/*Funcion que compara las elecciones de ambos jugadores y decide quien ganó*/
/*Descripcion de la funcion: La funcion "Ganador" toma dos argumentos de entrada de tipo string y los compara siguiendo la reglas de juego. Se crean dos variables: Un elemento <p> y un mensaje (TextNode), el elemento <p> en forma de variable recibe como hijo a la variable "mensajeGanador" con el metodo .appendChild, ésta variable contiene un texto segun el resultado de la jugada*/


function Ganador(playerChoice,CPUchoice){
    if(playerChoice == computerChoice){
        /**Creamos el elemento necesario con una declaracion de variable y document.createElement */
        let elementoCreado = document.createElement('p');
        /**Creamos el contenido tipo texto con document.createTextNode */
        let mensajeGanador = document.createTextNode("Tie!");
        /**Asignamos como hijo del elemento al texto */
        elementoCreado.appendChild(mensajeGanador);
        /**Asignamos como hijo del div: #mostrar-ganador al elemento p creado */
        document.getElementById('mostrar-ganador').appendChild(elementoCreado);
        /*mostramos div que se encontraba oculto*/
        document.getElementById('mostrar-ganador').style.display = 'flex';
        /**funcion que elimina en un breve periodo de tiempo el hijo del div #mostrar-ganador, asignado a la variable divMensajeGanador, para limpiar la pantalla luego de mostrar el mensaje */
        setTimeout(function(){
            divMensajeGanador.removeChild(divMensajeGanador.firstElementChild);
        },2000)
        /*console.log("Tie!");*/

        let puntoRonda = "tie";
        return puntoRonda;
    }else
    if(playerChoice == "Piedra" && CPUchoice == "Papel"){

        let elementoCreado = document.createElement('p')
        let mensajeGanador = document.createTextNode("CPU WINS\nPaper beat Rock");
        
        elementoCreado.appendChild(mensajeGanador);
        document.getElementById('mostrar-ganador').appendChild(elementoCreado);
        document.getElementById('mostrar-ganador').style.display = 'flex';

        setTimeout(function(){
            divMensajeGanador.removeChild(divMensajeGanador.firstElementChild);
        },2000)
         /*console.log("CPU WIN");*/
        fncrearTd(winnerCpu);

        let puntoCpu = "cpuPoint";

        return puntoCpu;
    }else
    if(playerChoice == "Piedra" && CPUchoice=="Tijera"){

        let elementoCreado = document.createElement('p')
        let mensajeGanador = document.createTextNode("PLAYER WINS\nRock beat Scissors");
        
        elementoCreado.appendChild(mensajeGanador);
        document.getElementById('mostrar-ganador').appendChild(elementoCreado);
        document.getElementById('mostrar-ganador').style.display = 'flex';

        setTimeout(function(){
            divMensajeGanador.removeChild(divMensajeGanador.firstElementChild);
        },2000)
         /*console.log("PLAYER WIN");*/
        fncrearTd(winnerPlayer);

        /**------- */
        let puntoRonda = "playerPoint";

        return puntoRonda;
        /**------- */
    }else
    if(playerChoice == "Papel" && CPUchoice == "Piedra"){

        let elementoCreado = document.createElement('p')
        let mensajeGanador = document.createTextNode("PLAYER WINS\nPaper beat Rock");
        
        elementoCreado.appendChild(mensajeGanador);
        document.getElementById('mostrar-ganador').appendChild(elementoCreado);
        document.getElementById('mostrar-ganador').style.display = 'flex';

        setTimeout(function(){
            divMensajeGanador.removeChild(divMensajeGanador.firstElementChild);
        },2000)

        /*console.log("PLAYER WIN");*/

        fncrearTd(winnerPlayer);

        /**--------- */
        let puntoRonda = "playerPoint";

        return puntoRonda;
        /**------- */
    }else
    if(playerChoice == "Papel" && CPUchoice == "Tijera"){

        let elementoCreado = document.createElement('p')
        let mensajeGanador = document.createTextNode("CPU WINS\nScissors beat Paper");
        
        elementoCreado.appendChild(mensajeGanador);
        document.getElementById('mostrar-ganador').appendChild(elementoCreado);
        document.getElementById('mostrar-ganador').style.display = 'flex';

        setTimeout(function(){
            divMensajeGanador.removeChild(divMensajeGanador.firstElementChild);
        },2000)
        /*console.log("CPU WIN");*/

        fncrearTd(winnerCpu);
        /**---------- */
        let puntoRonda = "cpuPoint";

        return puntoRonda;
        /**------------ */
    }else
    if(playerChoice == "Tijera" && CPUchoice == "Piedra"){

        let elementoCreado = document.createElement('p')
        let mensajeGanador = document.createTextNode("CPU WINS\nRock beat Scissors");
        
        elementoCreado.appendChild(mensajeGanador);
        document.getElementById('mostrar-ganador').appendChild(elementoCreado);
        document.getElementById('mostrar-ganador').style.display = 'flex';

        setTimeout(function(){
            divMensajeGanador.removeChild(divMensajeGanador.firstElementChild);
        },2000)
        /*console.log("CPU WIN");*/

        fncrearTd(winnerCpu);
        /**------------ */
        let puntoRonda= "cpuPoint";

        return puntoRonda;
        /**------------ */
    }else
    if(playerChoice == "Tijera" && CPUchoice == "Papel"){

        let elementoCreado = document.createElement('p')
        let mensajeGanador = document.createTextNode("PLAYER WINS\nScissors beat Paper");
        
        elementoCreado.appendChild(mensajeGanador);
        document.getElementById('mostrar-ganador').appendChild(elementoCreado);
        document.getElementById('mostrar-ganador').style.display = 'flex';

        setTimeout(function(){
            divMensajeGanador.removeChild(divMensajeGanador.firstElementChild);
        },2000)
         /*console.log("PLAYER WIN");*/
        fncrearTd(winnerPlayer);

        let puntoRonda = "playerPoint";

        return puntoRonda;
    }
}


/*Capturar el evento click sobre las imagenes de piedra, papel o tijera, diferenciando cada una*/

/*Cuando se haga click en el elemento id="piedra","papel", o tijera quiero que :

1) Se definan las variables playerChoice (al hacer click en algunas de las imagenes) y CPUchoice (con la funcion CPUselector)

2) Se llame a la funcion "Ganador" cuyos argumentos de entrada seran las variables ya definidas playerChoice y CPU choice

3) La funcion "Ganador" retorna un valor segun el ganador, cpuPoint o playerPoint, que se guarda en la variable "resultadoRonda"

4) Necesito dos variables contadores para cada jugador, se irá adicionando a cada variable un punto segun el valor de "resultadoRonda"

5)
*/



let contadorPlayer = 0;
            
let contadorCPU = 0;

function contadorPuntos(puntoRonda){

    /*console.log(puntoRonda)*/
    if (puntoRonda == "playerPoint"){
        contadorPlayer++;

        console.log(contadorPlayer);
    }else
    if(puntoRonda == "cpuPoint"){
        contadorCPU++;
        console.log(contadorCPU);
    }

    let PUNTOS = [contadorPlayer,contadorCPU]
    return PUNTOS;

}
 /*Funcion que crea un boton */
function crearBoton(){

    let  crearboton = document.createElement('button');
    let botoncontent = document.createTextNode("REMATCH");

    botoncontent = crearboton.appendChild(botoncontent);
    document.getElementById('mostrar-ganador').appendChild(crearboton);
    

    let tdcrear = document.createElement('td');
    let tdcontent = document.createTextNode("CWin");

    tdcontent = tdcrear.appendChild(tdcontent);
    document.getElementById('CPU-table').appendChild(tdcrear);
}


/*Funcion que recibe el array donde se cuenta los puntos y cuando alguno de los dos llega a 5 "borra" el div images-container y muestra un mensaje segun quien ganó el juego.*/

/* Luego del mensaje se crea un boton de "REMATCH*/
function rondadeCinco(PUNTOS5){

    if(PUNTOS5[0]==5){
        /**Borramos el div contenedor de las imagenes y la frase de ganador de la ronda*/
        document.getElementById('images-container').style.display = 'none';
        /**Creamos mensaje de resultado para las cinco rondas */
        let elementoCreado = document.createElement('p')
        let mensajeGanador = document.createTextNode("You win the game bro, you're lucky, maybe now you want to buy some bitcoins... Just kidding");
        
        elementoCreado.appendChild(mensajeGanador);
        document.getElementById('mostrar-ganador').appendChild(elementoCreado);
        document.getElementById('mostrar-ganador').style.display = 'flex';

    }else
    if(PUNTOS5[1]==5){
        document.getElementById('images-container').style.display = 'none';
        

        let elementoCreado = document.createElement('p')
        let mensajeGanador = document.createTextNode("CPU WINS THE MATCH, YOU KINDA HANDLESS BRO, SORRY :/");
        
        elementoCreado.appendChild(mensajeGanador);
        document.getElementById('mostrar-ganador').appendChild(elementoCreado);
        document.getElementById('mostrar-ganador').style.display = 'flex';
    }
    return false
}
/**------------------------------------------------------------------ */

       piedra.addEventListener('click',function(){


            let playerChoice = "Piedra";
            /*console.log("Jugador elije" + playerChoice );*/

            let CPUchoice = CPUselector();
            /*console.log("CPU elije " + CPUchoice);*/

            let resultadoRonda = Ganador(playerChoice,CPUchoice);

            /*console.log(resultadoRonda);*/

            let point = contadorPuntos(resultadoRonda);

            console.log(point);

            let breakRonda=rondadeCinco(point);
       })

/**------------------------------------------------------------------ */
       papel.addEventListener('click',function(){
            
            let playerChoice = "Papel";
            /*console.log("Jugador elije " + playerChoice);*/


            let CPUchoice = CPUselector();
            /*console.log("CPU elije " + CPUchoice);*/


            let resultadoRonda = Ganador(playerChoice,CPUchoice);

            /*console.log(resultadoRonda);*/


            let point = contadorPuntos(resultadoRonda);

            console.log(point);
           
            let breakRonda=rondadeCinco(point);

       })

/**------------------------------------------------------------------ */

       tijera.addEventListener('click',function(){

            let playerChoice = "Tijera";
            /*console.log("Jugador elije " + playerChoice);*/

            let CPUchoice = CPUselector();
            /*console.log("CPU elije " + CPUchoice);*/


            let resultadoRonda = Ganador(playerChoice,CPUchoice);
            /*console.log(resultadoRonda);*/
            

            let point = contadorPuntos(resultadoRonda);

            console.log(point);

            let breakRonda=rondadeCinco(point);


       })

