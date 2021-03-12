import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'; 
import { TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popup-inicio',
  templateUrl: './popup-inicio.component.html',
  styleUrls: ['./popup-inicio.component.scss']
})
export class PopupInicioComponent implements OnInit{
  @ViewChild('content', { static: true }) content!: TemplateRef<any>; 
  @Output() nombreUsuario = new EventEmitter<String>(); //Permite enviar la información al elemento padre
  closeResult = "";
  errorUsuario: String = ""; //Muestra un error en el campo usuario
  errorPasswd: String = ""; //Muestra un error en el campo contraseña
  modalReference!: NgbModalRef;

  constructor(private modalService: NgbModal) { }
  
  //Al pulsar "Login", cierra el modal si los campos han sido rellenados y envía el usuario 
  close(nombreUsuario:  String, passwd:  String): void{
    if(this.comprobarUsuario(nombreUsuario) && this.comprobarPasswd(passwd)){
      this.nombreUsuario.emit(nombreUsuario);
      this.modalReference.close();
    }    
  }
  //Comprueba si se ha rellenado un usuario y almacena el error
  comprobarUsuario(nombreUsuario:  String): boolean{
    if(nombreUsuario != ""){
      this.errorUsuario = "";
      return true;
    }else{
      this.errorUsuario = "Debes introducir un usuario";
      return false;
    }
  }
  //Comprueba si se ha rellenado la contraseña y almacena el error
  comprobarPasswd(passwd:  String): boolean{
    if(passwd != ""){
      this.errorPasswd = "";
      return true;
    }else{
      this.errorPasswd = "Debes introducir una contraseña";
      return false;
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //Muestra el popup al cargar la página
  ngOnInit(): void {
    this.modalReference = this.modalService.open(this.content, {ariaLabelledBy: 'popup-inicio-title', centered: true, backdrop: "static"}); 
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
