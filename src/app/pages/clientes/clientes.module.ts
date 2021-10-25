import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as ngFormsModule } from '@angular/forms';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ListarComponent } from './listar/listar.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ListarComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    ngFormsModule,
    NbInputModule,
    NbButtonModule,
  ]
})
export class ClientesModule { }
