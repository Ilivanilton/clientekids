import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    children: [
      {
        path: 'listar',
        component: ListarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
