var textoH5 = "Agregar Pendiente";

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
  var boton = document.createElement("button");
  titulo = document.createTextNode("Borrar Lista");
  boton.appendChild(titulo);
  boton.value = articulo.id;
  // boton.onclick = borrarTodo();
  boton.onclick = function(){
    var elementoBorrar = document.getElementById(this.value);
    document.getElementById("contenedor").removeChild(elementoBorrar);
  }
  articulo.appendChild(boton);
// agrega lista tipo ul
  var lista = document.createElement("ul");
  lista.id = Date.now();
  articulo.appendChild(lista);
// agrega sección de Agregar Pendientes
  var pendientesTexto = document.createElement("h5");
  var texto = document.createTextNode(textoH5);
  articulo.appendChild(texto);
  var cajaTexto = document.createElement("input");
  cajaTexto.id = lista.id -2;
  articulo.appendChild(cajaTexto);
  var boton2 = document.createElement("button");
  titulo = document.createTextNode("Crear Pendiente");
  boton2.appendChild(titulo);
  boton2.value = cajaTexto.id;

  boton2.onclick = function(){
    var elementoBorrar = document.getElementById(this.value);
    document.getElementById("contenedor").removeChild(elementoBorrar);
  }
  articulo.appendChild(boton2);

// agrega articulo con todos sus datos
  document.getElementById("contenedor").appendChild(articulo);
  document.getElementById("creandoLista").value = "";
}

// function obtenerId(valorId){
//   return valorId;
// }

function borrarTodo(valorId){
  var elementoBorrar = document.getElementById(valorId);
  document.getElementById("contenedor").removeChild(elementoBorrar);
}


function crearPendiente(inputId){
  // agregar elementos li + boton de boorar pendiente
  var entradaTexto = document.getElementById(inputId);
  var li = document.createElement("li");
  li.id = Date.now();
  var texto = document.createTextNode(entradaTexto.value);
  var boton = document.createElement("button");
  titulo = document.createTextNode("Borrar Pendiente");
  boton.appendChild(titulo);
  boton.value = li.id ;
  boton.onclick = function(){
    var elementoBorrar = document.getElementById(this.value);
    document.getElementById("contenedor").removeChild(elementoBorrar);
  }
  li.appendChild(texto);
  li.appendChild(boton);
  var nuevoElemento = document.getElementById(inputId+2);
  entradaTexto.value = "";
  nuevoElemento.appendChild(li);
}
