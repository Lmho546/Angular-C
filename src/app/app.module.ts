import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FiltrosBusquedaComponent } from './filtros-busqueda/filtros-busqueda.component';
import { BusquedaWrapperComponent } from './busqueda-wrapper/busqueda-wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarraBusquedaComponent,
    NavbarComponent,
    MainComponent,
    FiltrosBusquedaComponent,
    BusquedaWrapperComponent,
    FooterComponent,
    ResultadosBusquedaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
