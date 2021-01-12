/*Variables del DOM (Document Object Model).
Js toma el elemento por el nombre de la clase (ByClassName)*/
var botonIzquierdo = document.getElementsByClassName('fa-chevron-left');
var botonDerecho = document.getElementsByClassName('fa-chevron-right');
var containerCard = document.getElementsByClassName('detail-cards--container');

/*una vez haga click a la variable botonIzquierdo, este ejecutará la función desplazarIzquierda*/
botonIzquierdo[0].addEventListener("click", desplazarIzquierda);

botonDerecho[0].addEventListener("click", desplazarDerecha);

/*Funciones de scrollhorizontal para el contenedor de las tarjetas(containerCard)*/
function desplazarIzquierda(){
  containerCard[0].scrollLeft -= 250;
}

function desplazarDerecha(){
  containerCard[0].scrollLeft += 250;
}