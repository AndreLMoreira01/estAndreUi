import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../core/model';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.scss']
})
export class ListacategoriasComponent implements OnInit {

  categorias: Categoria[] = [
    {id: 1, nomecategoria: 'Chuck Taylor All Star Preto'}
  ];

  displayedColumns = ['id','nomecategoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
