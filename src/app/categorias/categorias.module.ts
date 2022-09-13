import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListacategoriasComponent } from './listacategorias/listacategorias.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    ListacategoriasComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
