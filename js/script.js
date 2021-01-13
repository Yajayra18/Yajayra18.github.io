/*Variables del DOM (Document Object Model).
Js toma el elemento por el nombre de la clase (ByClassName)*/
var botonIzquierdo = document.getElementsByClassName('fa-chevron-left');
var botonDerecho = document.getElementsByClassName('fa-chevron-right');
var containerCardResumen = document.getElementsByClassName('detail-cards--container');
var containerCardExperiencia = document.getElementsByClassName('experience-cards--container');

console.log(containerCardExperiencia);


/*una vez haga click a la variable botonIzquierdo, este ejecutará la función desplazarIzquierdaResumen*/
botonIzquierdo[0].addEventListener("click", desplazarIzquierdaResumen);
botonDerecho[0].addEventListener("click", desplazarDerechaResumen);

botonIzquierdo[1].addEventListener("click", desplazarIzquierdaExperiencia);
botonDerecho[1].addEventListener("click", desplazarDerechaExperiencia);

/*Funciones de scrollhorizontal para el contenedor de las tarjetas(containerCardResumen)*/
function desplazarIzquierdaResumen(){
  containerCardResumen[0].scrollLeft -= 250;
}

function desplazarDerechaResumen(){
  containerCardResumen[0].scrollLeft += 250;
}

function desplazarIzquierdaExperiencia(){
  containerCardExperiencia[0].scrollLeft -= 231;
}

function desplazarDerechaExperiencia(){
  containerCardExperiencia[0].scrollLeft += 231;
}