import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent {

  @Input()
  clickRegistrarse =  false;

  @Output()
  clickRegistrarseEmitido = new EventEmitter();



  activarRegistrarse (){


    sessionStorage["paginaRegistroUsuarioActiva"] = true;

  }

}

