import { Component } from '@angular/core';

declare const InicializarJS : any

@Component({
  selector: 'app-filtros-busqueda',
  templateUrl: './filtros-busqueda.component.html',
  styleUrls: ['./filtros-busqueda.component.css']
})
export class FiltrosBusquedaComponent {

  ngAfterViewInit() {
    InicializarJS();
  }
  
}
