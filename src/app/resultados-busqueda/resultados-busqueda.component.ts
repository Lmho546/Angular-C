import { Component } from '@angular/core';
import { Producto } from '../../classes/producto.class';

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent {

  productos : Array<Producto> = [

   new Producto ("Danmachi Volumen 7 (Español)", "Danmachi", "Manga", 4640, 10),
   new Producto ("Dragon Ball Super Cap 41-52 (Sub-Español)", "Dragon Ball Super", "Anime", 9500, 10),
   new Producto ("7 Esferas De Dragon Ball", "Dragon Ball", "Coleccionable", 10000, 0),
   new Producto ("Peluche Pichu Pokemon", "Pokemon", "Coleccionable", 6000, 10)

  ];

}
