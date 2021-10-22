import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
  ]
})
export class ClientesModule { }
