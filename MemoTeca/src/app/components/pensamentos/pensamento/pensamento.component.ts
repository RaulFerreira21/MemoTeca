import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  
  pensamento ={
    conteudo: 'Angular é massa',
    autoria: 'Raul',
    modelo: 'modelo3'
  }

  constructor() {

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
