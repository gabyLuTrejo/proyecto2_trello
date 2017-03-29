
function crearLista(){
// agrega formáto al título
  var tituloH1 = document.createElement("h1");
  var titulo = document.getElementById("creandoLista").value;
  titulo = document.createTextNode(titulo);
  tituloH1.appendChild(titulo);
// agrega el título
  var articulo = document.createElement("article");
  articulo.id = Date.now();
  articulo.appendChild(tituloH1);
// agrega boton para borrar lista
  var boton = document.getElementById("borraLista");
  var botonClon = boton.cloneNode(true);
  botonClon.value = articulo.id ;
  articulo.appendChild(botonClon);
// agrega lista tipo ul
  var lista = document.createElement("ul");
  // lista.id = Date.now();
  articulo.appendChild(lista);
// agrega sección de Agregar Pendientes
  var pendientes = document.getElementById("pendientes");
  var pendientesClon = pendientes.cloneNode(true);
  articulo.appendChild(pendientesClon);
// agrega articulo con todos sus datos
  document.getElementById("contenedor").appendChild(articulo);
  document.getElementById("creandoLista").value = "";
}

function borrarTodo(valorId){
  var elementoBorrar = document.getElementById(valorId);
  document.getElementById("contenedor").removeChild(elementoBorrar);
}
