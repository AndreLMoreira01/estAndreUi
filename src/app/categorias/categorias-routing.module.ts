import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListacategoriasComponent } from './listacategorias/listacategorias.component';

const routes: Routes = [
  {
    path: '', component: ListacategoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
