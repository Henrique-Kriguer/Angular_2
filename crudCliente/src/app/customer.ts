import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class Customer {

  constructor() { }
    salvar(cliente: Cliente) {
      console.log('Dados Cliente: ', cliente);
    }
  
}
