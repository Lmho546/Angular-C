import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componentes-Ledesma';
  
  clickRegitrarse = false;

  onClickRegistrarse ():void{

    this.clickRegitrarse = true;

  }

  ngOnInit(){

    if(sessionStorage["paginaRegistroUsuarioActiva"] == undefined || sessionStorage["paginaRegistroUsuarioActiva"] == "false" ){

      sessionStorage["paginaRegistroUsuarioActiva"] = false;

    }else{

      this.clickRegitrarse  =  true;

    }

  }


}
