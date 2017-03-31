var ListasCreadas = [];

//Constructor de ObjetosLista
function ObjetoLista(titulo, id){
  this.titulo = titulo;
  this.id = id;
  this.pendiestesDeLista = [];
}

// Función para crear Lista
function creaLista(){
  // boton: Crear Lista
  // input id: creandoLista
  var tituloLista = document.getElementById("creandoLista");
  var idLista = Date.now();
  var listaCreada = new ObjetoLista(tituloLista.value, idLista);
  console.log(listaCreada);
  mostrarEnHTML(listaCreada);
  ListasCreadas.push(listaCreada);
  // document.getElementById("creandoLista").value = "";
}

// Función para Mostrar Lista creada en HTML
function mostrarEnHTML(listaNueva){
  // id: contenedor (sección donde se agregan las listas)
  var seccionArticulo = document.createElement("article");
  seccionArticulo.id = Date.now();
  document.getElementById("contenedor").appendChild(seccionArticulo);
  var titulo = agregandoTitulo(listaNueva);
  document.getElementById(seccionArticulo.id).appendChild(titulo);

}

// Función que agrega el título
function agregandoTitulo(listaNueva){
  var tituloH1 = document.createElement("h1");
  var tituloTexto = document.createTextNode(listaNueva.titulo);
  tituloH1.appendChild(tituloTexto);
  return tituloH1;
  // document.getElementById("contenedor").appendChild(tituloH1); // cambiar contenedor por la seccion creada
}

/* Resolución Programación Estructurada
//-----------------------------------------------------------------
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
  lista.id = "lista" + articulo.id;
  articulo.appendChild(lista);
// agrega sección de Agregar Pendientes
  var pendientesTexto = document.createElement("h5");
  var texto = document.createTextNode("Agregar Pendiente");
  pendientesTexto.appendChild(texto);
  articulo.appendChild(pendientesTexto);
  var cajaTexto = document.createElement("input");
  cajaTexto.placeholder = "Enviar proyecto";
  cajaTexto.id = "texto" + articulo.id ;
  articulo.appendChild(cajaTexto);
  var boton2 = document.createElement("button");
  titulo = document.createTextNode("Crear Pendiente");
  boton2.appendChild(titulo);
  boton2.value = articulo.id;
  boton2.name = Date.now();

  boton2.onclick = function (){
    // agregar elementos li + boton de boorar pendiente
    var inputId = this.value;
    var liId = this.name;
    var entradaTexto = document.getElementById("texto" + inputId);
    var li = document.createElement("li");
    li.id = "li"+ liId;
    var texto = document.createTextNode(entradaTexto.value);
    var boton3 = document.createElement("button");
    titulo = document.createTextNode("Borrar Pendiente");
    boton3.appendChild(titulo);
    boton3.value = li.id ;
    boton3.onclick = function(){
      var elementoBorrar = document.getElementById(this.value);
      document.getElementById(lista.id).removeChild(elementoBorrar);
    }

    li.appendChild(texto);
    li.appendChild(boton3);
    var nuevoElemento = document.getElementById(lista.id);
    entradaTexto.value = "";
    nuevoElemento.appendChild(li); ///error???
  }
  articulo.appendChild(boton2);

// agrega articulo con todos sus datos
  document.getElementById("contenedor").appendChild(articulo);
  document.getElementById("creandoLista").value = "";
}
*/

//Funciones para caso "muestra" (article id="muestra")
//----------------------------------------------------------------------------
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


function borrarPendiente(valorId){
  var elementoBorrar = document.getElementById(valorId);
  document.getElementById("bodd2").removeChild(elementoBorrar);
}
