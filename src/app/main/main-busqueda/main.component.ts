import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-busqueda',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @Input()
  clickRegistrarse =  false;

}
