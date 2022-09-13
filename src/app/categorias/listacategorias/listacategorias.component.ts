import { Component, OnInit } from '@angular/core';
import { Categorias } from '../../core/model';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.scss']
})

export class ListacategoriasComponent implements OnInit {

 categorias: Categorias[] = [
  {"id":1, "nomecategoria": 'Programas'}
 ];

displayedColumns = ['id', 'nomecategoria'];

  constructor() { }

  ngOnInit(): void {
  }

}


