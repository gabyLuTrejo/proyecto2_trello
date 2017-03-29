
function crearLista(){
// agrega título + propiedades
  var tituloH1 = document.createElement("h1");
  var titulo = document.getElementById("creandoLista").value;
  titulo = document.createTextNode(titulo);
  tituloH1.appendChild(titulo);
  var articulo = document.createElement("article");
  articulo.appendChild(tituloH1);
// agrega boton para borrar lista
  var boton = document.getElementById("borraLista");
  var botonClon = boton.cloneNode(true);
  articulo.appendChild(botonClon);
// agrega sección de Agregar Pendientes
  var pendientes = document.getElementById("pendientes");
  var pendientesClon = pendientes.cloneNode(true);
  articulo.appendChild(pendientesClon);
// agrega articulo con todos sus datos
  document.getElementById("contenedor").appendChild(articulo);
}
