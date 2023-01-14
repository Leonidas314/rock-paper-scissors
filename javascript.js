
let boton = document.querySelector('#play-button');

let introContainer = document.querySelector('.intro-container');

let imagesContainer = document.querySelector('.images-container');

/*Cambiar la propiedad css de un elemento para que no sea visible*/
document.getElementById("images-container").style.display = 'none'


/*Funcion para capturar evento click en  variable boton
se remueve la variable "introContainer" y se cambia la propiedad de
elementon con id ="images-container" a "flex"*/

 boton.addEventListener('click', function(){

    introContainer.remove();
    document.getElementById('images-container').style.display = 'flex'

    console.log("boton activado");
 
})

/*imagesContainer.addEventListener('mouseover' , function(){

    console.log("Pasó");
})*/