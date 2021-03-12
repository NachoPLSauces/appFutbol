import { Component, ViewChild } from '@angular/core';
import { PopupInicioComponent } from '../app/popup-inicio/popup-inicio.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'appFutbol';
  nombreUsuario: String = "";

  @ViewChild(PopupInicioComponent) popupInicio: any;

  constructor(private toastr: ToastrService) { }

  mostrarToaster(){
    this.toastr.success("Se ha iniciado sesión");
  }

  mostrarNombreUsuario(nombreUsuario: String) {
    this.nombreUsuario = nombreUsuario;
    this.mostrarToaster();
  }
}
