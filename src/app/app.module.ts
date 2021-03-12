import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { BusquedaEquiposComponent } from './busqueda-equipos/busqueda-equipos.component';
import { EventosComponent } from './eventos/eventos.component';
import { MostrarEquiposComponent } from './mostrar-equipos/mostrar-equipos.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupInicioComponent } from './popup-inicio/popup-inicio.component';
import { MostrarEventosComponent } from './mostrar-eventos/mostrar-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    BusquedaEquiposComponent,
    EventosComponent,
    MostrarEquiposComponent,
    ListaEquiposComponent,
    PopupInicioComponent,
    MostrarEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
