/*Variables del DOM (Document Object Model).
Js toma el elemento por el nombre de la clase (ByClassName)*/

let gap = getComputedStyle(document.getElementsByClassName('detail-cards--container')[0]);
gap = parseInt(gap.gridColumnGap.split('px')[0]);

var botonIzquierdo = document.getElementsByClassName('fa-chevron-left');
var botonDerecho = document.getElementsByClassName('fa-chevron-right');
var containerCardResumen = document.getElementsByClassName('detail-cards--container');
var containerCardExperiencia = document.getElementsByClassName('experience-cards--container');

var containerCardProyecto = document.getElementsByClassName('project-cards--container');

var containerCardProyectoPla = document.getElementsByClassName('Certificate-container');


/*una vez haga click a la variable botonIzquierdo, este ejecutará la función desplazarIzquierdaResumen*/
botonIzquierdo[0].addEventListener("click", desplazarIzquierdaResumen);
botonDerecho[0].addEventListener("click", desplazarDerechaResumen);

botonIzquierdo[1].addEventListener("click", desplazarIzquierdaExperiencia);
botonDerecho[1].addEventListener("click", desplazarDerechaExperiencia);

botonIzquierdo[2].addEventListener("click", desplazarIzquierdaProyecto);
botonDerecho[2].addEventListener("click", desplazarDerechaProyecto);

botonIzquierdo[3].addEventListener("click", desplazarIzquierdaProyectoPla);
botonDerecho[3].addEventListener("click", desplazarDerechaProyectoPla);

/*Funciones de scrollhorizontal para el contenedor de las tarjetas(containerCardResumen)*/
function desplazarIzquierdaResumen(){
  containerCardResumen[0].scrollLeft -= 250;
}

function desplazarDerechaResumen(){
  containerCardResumen[0].scrollLeft += 250;
}

function desplazarIzquierdaExperiencia(){
  containerCardExperiencia[0].scrollLeft -= 236;
}

function desplazarDerechaExperiencia(){
  containerCardExperiencia[0].scrollLeft += 236;
}

function desplazarIzquierdaProyecto(){
  containerCardProyecto[0].scrollLeft -= 210;
}

function desplazarDerechaProyecto(){
  containerCardProyecto[0].scrollLeft += 210;
}

function desplazarIzquierdaProyectoPla(){
  containerCardProyectoPla[0].scrollLeft -= 186;
}

function desplazarDerechaProyectoPla(){
  containerCardProyectoPla[0].scrollLeft += 186;
}