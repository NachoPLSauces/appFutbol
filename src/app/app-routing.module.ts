import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { EquiposComponent } from '../app/equipos/equipos.component';
import { EventosComponent } from '../app/eventos/eventos.component';

const routes: Routes = [
  {
    path: "",
    component: EquiposComponent
  },
  {
    path: "eventos",
    component: EventosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
