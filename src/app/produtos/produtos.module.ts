import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ListaprodutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatTableModule
  ]
})
export class ProdutosModule { }
