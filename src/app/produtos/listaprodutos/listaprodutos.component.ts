import { Component, OnInit } from '@angular/core';
import { Produto } from '../../core/model';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.scss']
})

export class ListaprodutosComponent implements OnInit {

  produtos: Produto[] = [
    {id: 1, nomeproduto: 'Chuck Taylor All Star Preto'}
  ];

  displayedColumns = ['id','nomeproduto'];

  constructor() { }

  ngOnInit(): void {
  }

}
