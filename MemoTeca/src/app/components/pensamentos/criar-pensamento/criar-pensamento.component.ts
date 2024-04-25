import { Component, OnInit } from '@angular/core';
import { Pensamento } from './criar-pensamento.interface';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  public pensamento : Pensamento = {
    autoria: '',
    conteudo: '',
    id: '',
    modelo: ''
  }

  constructor() {

  }
  
  ngOnInit(): void {
  
  }

  salvarPensamento() {

  }

  cancelarPensamento() {
    
  }

}
