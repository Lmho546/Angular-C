function InicializarJS(){

const botonFiltrosBusquedaDerecha = document.getElementById("botonFiltrosDerecha");
const botonFiltrosBusquedaIzquierda = document.getElementById("botonFiltrosIzquierda");
const botonSalirFiltros = document.getElementById("salirFiltros");

const filtrosBusqueda = document.getElementsByClassName("busqueda")[0];

botonFiltrosBusquedaDerecha.onclick = FiltrosBusquedaAbrir;
botonFiltrosBusquedaIzquierda.onclick = FiltrosBusquedaAbrir;

botonSalirFiltros.onclick = FiltrosBusquedaCerrar;


function FiltrosBusquedaAbrir(){

filtrosBusqueda.classList.add("filtrosBusquedaVisible");

}

function FiltrosBusquedaCerrar(){

filtrosBusqueda.classList.remove("filtrosBusquedaVisible");

}

}